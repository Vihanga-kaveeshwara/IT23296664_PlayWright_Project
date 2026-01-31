const { test, expect } = require('@playwright/test');

test.describe('Positive Functional Test Cases - Singlish to Sinhala', () => {

  test('Pos_Fun_0001 - Simple sentence conversion', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama paasal yanavaa');

    await expect(outputBox).not.toHaveValue('', { timeout: 20000 });

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0002 - Greeting conversion', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama sellam karanavaa saha passe paadam karannan');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0003 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('oyaalaa igenagannavanan mama kiyalaa dhenavaa');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

  // 👉 SAME PATTERN USE
  // Add remaining Pos_Fun_004 → Pos_Fun_024 
  
  test('Pos_Fun_0004 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('oyaa mata baninavadha?');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0005 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mehe balanna');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0006 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('api heta oyaalage gedhara enavaa');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

   

  test('Pos_Fun_0007 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama mee velave kaeema kanne naehae');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0008 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill(' suba rathriyak!');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0009 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('karuNaakaralaa eeka mata dhenna');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0010 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('ov, mata eeka karanna puLuvan');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0011 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('Oyaata puLuvannan karuNaakara mata inna dhenna');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0012 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('eeyi, mehe varen');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0013 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama naegitalaa inne');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0014 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('bohoma hondai');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0015 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill(' mata raeeta bath kanna onee');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0017 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('podda podda');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });



  test('Pos_Fun_0018 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama iiye panthi giyaa');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });



  test('Pos_Fun_0019 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('api dhaen sellan karanavaa');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0020 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('api heta oyaalage gedhara enavaa');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });



  test('Pos_Fun_0021 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mata ehe yanna baee');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });




  test('Pos_Fun_0022 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama eeka balanna hadhannee');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });




  test('Pos_Fun_0023 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('api panthiyata yamu');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });




  test('Pos_Fun_0024 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('karuNaakaaralaa ayin venna puLuvandha?');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });



  test('Pos_Fun_0025 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('oyaa whatsapp innavadha?');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  
  test('Pos_Fun_0026 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('oyaa yadhdhi mata call ekak dhenna');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

   test('Pos_Fun_0027 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mata ATM ekata yanna oonee');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

   test('Pos_Fun_0028 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('oyaa mata Rs. 1000 dhunnadha?');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });
  

});


