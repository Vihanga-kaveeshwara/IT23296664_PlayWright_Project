const { test, expect } = require('@playwright/test');

test.describe('Positive UI Test Cases', () => {

  test('Pos_UI_0001 - UI handles multiple spaces correctly', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('api                 heta                    palli                  yanavaa');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();

    // UI validation
    expect(output).not.toContain(' අපි                 හෙට                    පල්ලි                  යනවා  ');
    expect(output.length).toBeGreaterThan(0);
  });

});