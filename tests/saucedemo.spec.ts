import { expect, test } from "@playwright/test";

test('Localizando por data-test', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByTestId('username').fill('user_test')

})

test('Usando asserts básicos', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    const loginButton = await page.locator('input#login-button');
    await expect (loginButton).toBeVisible();
    await expect(loginButton).toHaveCSS('background-color','rgb(61, 220, 145)');
    await expect (loginButton).toHaveAttribute('value','Login');
    await expect.soft(loginButton, 'Verificando se o botão está habilitado').toBeEnabled();//custom expect message

 })