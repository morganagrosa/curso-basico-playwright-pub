import {expect, test} from '@playwright/test';
import { error } from 'console';
import { before } from 'node:test';
//Desafio Login

function getLoginElements(page) {
    return {
        usernameInput: page.getByTestId('username'),
        passwordInput: page.getByTestId('password'),
        loginButton: page.getByTestId('login-button'),
    };
}


test('login with sucess' , async ({page}) => {
    await page.goto ('https://www.saucedemo.com/');
    const { usernameInput, passwordInput, loginButton } = getLoginElements(page);
    await usernameInput.fill ('standard_user');
    await passwordInput.fill ('secret_sauce');
    await loginButton.click();

    await expect (page).toHaveURL ('https://www.saucedemo.com/inventory.html');
    const pageTitle = page.locator('.app_logo');
    await expect (pageTitle).toContainText ('Swag Labs');

})

test('login with locked user', async ({page}) => {
    await page.goto ('https://www.saucedemo.com/');
    const { usernameInput, passwordInput, loginButton } = getLoginElements(page);
    await usernameInput.fill('locked_out_user');
    await passwordInput.fill('secret_sauce');

    await loginButton.click();

    const errorMessageContainer = page.locator('div.error-message-container.error');    
    await expect(errorMessageContainer).toBeVisible();
    await expect(errorMessageContainer).toContainText('Epic sadface: Sorry, this user has been locked out.');

});

test ('login with invalid password', async ({page}) => {
    await page.goto ('https://www.saucedemo.com/');
    const {usernameInput, passwordInput, loginButton} = getLoginElements(page);
    await usernameInput.fill ('visual_user');
    await passwordInput.fill ('bananinha');
    await loginButton.click();

    const errorMessageContainer = page.locator('div.error-message-container.error');
    await expect(errorMessageContainer).toBeVisible();
    await expect(errorMessageContainer).toContainText('Epic sadface: Username and password do not match any user in this service');    
});




