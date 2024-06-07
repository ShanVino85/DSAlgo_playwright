import { test, expect } from '@playwright/test';
exports.Datastructureindsalgo=
class Datastructurepage{
     constructor (page)
    {
    this.page=page;
    this.DatastrClick="//a[@href='data-structures-introduction']"
    this.Datatimecomp='.list-group-item'
    this.Clickarray="//a[normalize-space()='Arrays']"
    this.Datadropmenu='.dropdown-menu a'
    this.Dataheading="//h4[normalize-space()='Data Structures-Introduction']"
    }
async gotoDatastrupage()
  {
     await this.page.locator(this.DatastrClick).click()
     await expect(await this.page.locator(this.Dataheading)).toHaveText('Data Structures-Introduction');
    await this.page.locator(this.Datatimecomp).click()
   }

   async dropassert()
   {
    const dropvalue=await this.page.locator(this.Datadropmenu)
    await expect(dropvalue).toHaveCount(6)
   }

}


