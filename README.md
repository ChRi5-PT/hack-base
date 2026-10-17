# Hack the Andes — base

Vite + React + TypeScript + Tailwind v4 + shadcn/ui + Supabase + Playwright + Netlify.

## Primer uso (esta noche)
```bash
npm install
cp .env.example .env.local        # completa URL y anon key de Supabase
npx playwright install chromium   # descarga el navegador de pruebas
npm run dev                       # http://localhost:5173
npm run test:e2e                  # debe pasar el test de humo
npm run build                     # debe compilar sin errores
```

## Supabase
Pega `supabase/migrations/0001_init.sql` en el SQL Editor del proyecto (o usa la CLI de Supabase).

## Deploy en Netlify
```bash
npm i -g netlify-cli
netlify login
netlify init                      # o: netlify deploy --build --prod
```
Agrega `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` en Site settings → Environment variables.

## Probar el deploy real
```bash
BASE_URL=https://tu-sitio.netlify.app npm run test:e2e
```

Las instrucciones para el agente y el uso de skills están en `CLAUDE.md`.
