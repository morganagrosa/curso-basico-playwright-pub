import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dmercado%2Blivre%26oq%3Dmercado%2Blivre%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDI0NTBqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DoUQvaf-uDpiV5OUP-JSdqQw&q=EgTJSPeCGKGJvckGIjA-FMhXFeRTjyHakOmWfpa-w2otWhKKRpw22ofUYJY9C2fTJYyBWPgSt0jV2cf3iQoyAVJaAUM');
  await page.locator('iframe[name="a-cqt3r5iubp35"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('div:nth-child(2) > div').first().click();
  await page.locator('div:nth-child(2) > div').first().click();
});