import { expect, test } from '@playwright/test'

// Test de humo: copia este patrón para el flujo crítico de tu demo.
test('la home carga y el contador responde', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('title')).toHaveText('Hack the Andes')
  await expect(page.getByTestId('db-status')).toHaveText('Supabase: conectado')

  const counter = page.getByTestId('counter')
  await expect(counter).toHaveText('Clicks: 0')
  await counter.click()
  await expect(counter).toHaveText('Clicks: 1')
})

