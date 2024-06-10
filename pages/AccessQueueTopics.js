const { expect } = require("@playwright/test");
exports.AccessQueueTopics=
class AccessQueueTopics{
    constructor(page){
    this.page=page;
    this.Topic="//body/div/ul['+i+']/a[@class='list-group-item']"
    this.TryHere="//a[contains (text(),'Try here')]"
    this.Input="//form[@id='answer_form']/div/div/div[1]/textarea"
    this.Run="//button"
    this.Runoutput="//pre[@id='output']"
    }
    async AccessQueueLinks(){
        await this.page.waitForSelector(this.Topic)
        const Topics=await this.page.$$(this.Topic)
        console.log("Number of Topics:",Topics.length)
        await expect(Topics.length).toBe(4)
        let T
        for(let i=1;i<=Topics.length;i++){
            this.Topic="//body/div/ul[" + i + "]/a[@class='list-group-item']"
              await this.page.waitForSelector(this.Topic)
              T=await this.page.locator(this.Topic)
              T.click()
              await this.page.locator(this.TryHere).click()
              await this.page.waitForSelector(this.Input)
              await this.page.locator(this.Input).fill('print("Regression Test on Try Editor ")')
              await this.page.locator(this.Run).click()
              await this.page.waitForSelector(this.Runoutput)
              const output=await this.page.locator(this.Runoutput).textContent()
              console.log(output)
              await expect(this.page.locator(this.Runoutput)).toHaveText("Regression Test on Try Editor ")
              //await this.page.waitForTimeout(2000)
              await this.page.goBack()
              const Currenturl=await this.page.url();
              console.log(Currenturl)
              await this.page.goBack()
        }
    }
}