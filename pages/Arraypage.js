import { test, expect } from '@playwright/test';
exports.Arrayindsalgo=
class Arraypage{
    
  constructor (page)
    {
    this.page=page;
    this.Arraysinpython="//a[normalize-space()='Arrays in Python']"
    this.Arraysinlist="//*[@id='content']/li[2]"
    this.Basicopertioninlist="//*[@id='content']/li[3]"
    this.ApplicationinArrays="//*[@id='content']/li[4]"
    this.Arrayheading="//h4[normalize-space()='Array']"
    this.Arraysinpythonhead="//p[normalize-space()='Arrays in Python']"
    this.Arraysinlisthead="//p[normalize-space()='Arrays Using List']"
    this.Basicopertioninlisthead="//p[normalize-space()='Basic Operations in Lists']"
    this.ApplicationinArrayshead="//p[normalize-space()='Applications of Array']"
  }
async Arraypage()
{
  await expect(await this.page.locator(this.Arrayheading)).toHaveText('Array');
    await this.page.locator(this.Arraysinpython).click()
    await expect(await this.page.locator(this.Arraysinpythonhead)).toHaveText('Arrays in Python');
    
}
   async arraysinlist()
   {
    await this.page.locator(this.Arraysinlist).click()
    await expect(await this.page.locator(this.Arraysinlisthead)).toHaveText('Arrays Using List');
    }
    async basicopertioninlist()
   {
    await this.page.locator( this.Basicopertioninlist).click()
    //await this.page.waitForTimeout(2000);
   // await expect.soft(await this.page.locator(this.Basicopertioninlisthead)).toHaveText('Basic Operations in Lists');
    }
    async applicationinArrays()
    {
     await this.page.locator( this.ApplicationinArrays).click()
    // await expect.soft(await this.page.locator(this.ApplicationinArrayshead)).toHaveText('Applications of Array');
     }

    
    }