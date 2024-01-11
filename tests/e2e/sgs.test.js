const { test, expect } = require('@playwright/test');

test.describe('SGS Tests', () => {
  test('searching a keyword', async ({ page }) => {
    await page.goto('https://www.sgs.com/nl-be');
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveTitle('SGS Belgium | SGS is wereldleider op het gebied van inspectie, controle, analyse en certificering.');

     await page.click('#onetrust-reject-all-handler');
     await page.getByRole('button', { name: 'Zoeken Zoeken' }).click();
     await page.locator('section').filter({ hasText: 'Waar bent u naar op zoek?' }).getByPlaceholder('Zoeken').click();
     await page.locator('section').filter({ hasText: 'Waar bent u naar op zoek?' }).getByPlaceholder('Zoeken').fill('vacatures');
     await page.locator('section').filter({ hasText: 'Waar bent u naar op zoek?' }).getByPlaceholder('Zoeken').press('Enter');

     await page.getByText('Relevantie Date: Ascending').click();
     await page.locator('div').filter({ hasText: /^Date: Ascending$/ }).click();
    const element = page.locator("//div[@class='coveo-list-layout CoveoResult'][1]");
    await expect(element).toContainText('Vacatures');

    //take a screenshot
   await page.screenshot({ path: 'sgs_test.png' });

  });
});



