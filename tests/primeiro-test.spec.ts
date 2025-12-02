import test from "@playwright/test";

test('Visitando página Playwright', async ({page}) => {
    await page.goto('https://playwright.dev');
   const title = await page.getByText('Playwright enables reliable end-to-end testing for modern web apps.').textContent();
   console.log(title);
   // await page.locator ('a[href="/docs/intro"]').click();
    await page.getByText('Get started').click();

})

