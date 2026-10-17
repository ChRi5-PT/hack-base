-- Esquema inicial de ejemplo. Adáptalo al brief del track.
-- Patrón base: cada fila pertenece a un usuario y RLS lo protege.

create table if not exists public.items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  title text not null,
  created_at timestamptz not null default now()
);

create index if not exists items_user_id_idx on public.items (user_id);

alter table public.items enable row level security;

create policy "items_select_own" on public.items
  for select to authenticated
  using ((select auth.uid()) = user_id);

create policy "items_insert_own" on public.items
  for insert to authenticated
  with check ((select auth.uid()) = user_id);

create policy "items_update_own" on public.items
  for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "items_delete_own" on public.items
  for delete to authenticated
  using ((select auth.uid()) = user_id);
