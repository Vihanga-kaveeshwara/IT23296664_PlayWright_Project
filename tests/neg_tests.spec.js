const { test, expect } = require('@playwright/test');

test.describe('Negative Functional Test Cases - Singlish to Sinhala', () => {

  test('Neg_Fun_0001 - Empty input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('sinhalakathaakaramu');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('සින්හලකතාකරමු');
  });

  test('Neg_Fun_0002 - Only spaces input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('Thx machan');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('thanks මචන්');
  });

  test('Neg_Fun_0003 - Numbers only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mamahavasatayanavaa');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('mata rupi 5000 dhenna');
  });

  test('Neg_Fun_0004 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('dhaen velaava 6.30 PM');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('දැන් වෙලාව ප.ව.6.30');
  });

  
  test('Neg_Fun_0005 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('api         gedhara         yanavaa ');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('අපි ගෙදර යනවා ');
  });



  test('Neg_Fun_0006 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama paadam karanavaa mata oya potha dhenna puLuvandha?');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('මම පාඩම් කරනවා මට ඔය පොත දෙන්න පුළුවන්ද?');
  });


  test('Neg_Fun_0007 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('');
  });


  test('Neg_Fun_0008 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('##mama kadee yanavaa##');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('මම කඩේ යනවා');
  });


  test('Neg_Fun_0009 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('oyat kohomd?');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('ඔයාට කොහොමද?');
  });


  test('Neg_Fun_0010 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama anidhdhata gedhara giyaa');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('මම අනිද්දට ගෙදර යනවා');
  });

   test('Neg_Fun_0011 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('Gn machan');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('ඟුඩ්නයිට් මචන්');
  });

  test('Neg_Fun_0012 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama ID eka aragena ennan');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('මම ID එක අරගෙන එන්නන්');
  });

});