# Hack the Andes — repo base

Stack: Vite + React + TypeScript + Tailwind v4 + shadcn/ui + Supabase + Playwright, deploy en Netlify.
Evento: 30 horas, entrega funcionando. **Shippear > pulir.** Priorizar el flujo de la demo.

## Reglas generales
- Responder en español; código e identificadores en inglés.
- Alias `@` apunta a `src/`. Componentes shadcn en `src/components/ui/`.
- Variables de entorno del cliente: solo `VITE_*` (llegan al navegador). Nunca poner `service_role` en el front.
- Antes de dar algo por terminado: `npm run typecheck && npm run build`.
- Commits pequeños y frecuentes; el último commit en `main` siempre debe desplegar.

## Cuándo usar cada skill
| Skill | Cuándo | Cómo pedirla |
|---|---|---|
| `netlify-deploy` | Hora 0 (deploy "hola mundo") y al final (verificar URL pública) | "Usa netlify-deploy para publicar y verificar" |
| `supabase-best-practices` | Al definir esquema, auth, RLS y consultas | "Usa supabase-best-practices para diseñar el esquema de X" |
| `shadcn-best-practices` | Cada vez que se agrega UI | "Usa shadcn-best-practices para construir la pantalla Y" |
| `playwright` | Cuando el flujo principal ya funciona; un solo flujo crítico | "Usa playwright para probar el flujo de la demo" |
| `agents-sdk` | Solo si el brief del track pide agentes | "Usa agents-sdk para construir el agente Z" |
| `skill-creator` | Solo si repites un proceso 3+ veces; si no, después del evento | — |
| D3.js | Solo si la solución necesita visualizaciones (grafos, series, mapas) | `npm i d3 @types/d3` |

## Flujo por fases
1. **Hora 0–2:** elegir track, `.env.local`, aplicar `supabase/migrations`, deploy inicial en Netlify.
2. **Hora 2–20:** construir el flujo principal de punta a punta antes de agregar extras.
3. **Hora 20–27:** `npm run test:e2e` sobre el flujo de la demo; arreglar lo que rompa.
4. **Hora 27–30:** deploy final, probar la URL pública (`BASE_URL=... npm run test:e2e`), preparar el pitch.

## Supabase
- Toda tabla nueva: `enable row level security` + políticas (ver `supabase/migrations/0001_init.sql`).
- Cliente único en `src/lib/supabase.ts`.

## Agregar componentes shadcn
`npx shadcn@latest add <componente>` (ya existe `components.json`).
