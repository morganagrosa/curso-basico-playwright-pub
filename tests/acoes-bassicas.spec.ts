//http://the-internet.herokuapp.com
import { expect, test } from "@playwright/test";

test('Ações Básicas', async ({ page }) => {
    await page.goto('http://the-internet.herokuapp.com/forgot_password');
    const emailInput = page.locator('input#email');
    await emailInput.fill('test@example.com');
    await emailInput.fill('');
    await emailInput.pressSequentially('1234567')
    await expect(emailInput).toHaveValue('1234567');

    //page.click
    await page.goto('http://the-internet.herokuapp.com/');
    const checkboxesLink = page.locator('a[href="/checkboxes"]');
    await checkboxesLink.click();
    await expect(page).toHaveURL('http://the-internet.herokuapp.com/checkboxes');

    // checkboxes validations
    const firstCheckbox = page.locator('input[type="checkbox"]').nth(0);
    await firstCheckbox.check();

    const secondCheckbox = page.locator('input[type="checkbox"]').nth(1);
    await secondCheckbox.uncheck();

    await expect(firstCheckbox).toBeChecked();
    await expect(secondCheckbox).not.toBeChecked();

})
 test('DropDownTest', async ({page}) => {
    //dropdown
    await page.goto('http://the-internet.herokuapp.com/dropdown');
    const dropdown = page.locator('select#dropdown');

    await dropdown.selectOption('1');
    await expect(dropdown).toHaveValue('1');

    await dropdown.selectOption({ label: 'Option 2' });
    await expect(dropdown).toHaveValue('2');
 })

 test('Hover Test', async ({page}) => {
    await page.goto('http://the-internet.herokuapp.com/hovers');
    const firtsImage = page.locator('div.figure').nth(0);
    const secondImage = page.locator('div.figure').nth(1);
    const thirdImage = page.locator('div.figure').nth(2);

    const imgInfo1 = firtsImage.locator('.figcaption'); //buscar pela class 
    const imgInfo2 = secondImage.locator('.figcaption');
    const imgInfo3 = thirdImage.locator('.figcaption');
        
    await firtsImage.hover();
    await expect (imgInfo1).toBeVisible();


    await secondImage.hover();
    await expect (imgInfo2).toBeVisible();

    await imgInfo2.getByAltText('User Avatar').click();
    expect (imgInfo2).toHaveAccessibleDescription('User avatar');

    await expect (imgInfo3).not.toBeVisible();  

    await imgInfo2.getByRole('link',{name:'View profile'}).click();
    expect (page.url()).toContain('/users/2');


 });    