import { test, expect } from '@playwright/test';

test.only('test amazon', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/');
  await page.getByRole('searchbox', { name: 'Pesquisar Amazon.com.br' }).click();
  await page.getByRole('searchbox', { name: 'Pesquisar Amazon.com.br' }).click();
  await page.getByRole('searchbox', { name: 'Pesquisar Amazon.com.br' }).click();
  await page.getByRole('searchbox', { name: 'Pesquisar Amazon.com.br' }).fill('carrinho de mão');
  await page.getByRole('button', { name: 'Ir', exact: true }).click();
  await page.locator('#a-autoid-1-announce').click();
  await page.locator('#a-autoid-5-announce').click();
  await page.getByRole('listitem').filter({ hasText: 'Carrinho de Mão Reforçado Cargas até 90Kg Chapa26 60 Litros Proposita 2,32,3 de' }).getByLabel('Aumentar a quantidade em um').click();
  await expect(page.locator('a-section a-spacing-none')).toHaveText('carrinho de mão')
});