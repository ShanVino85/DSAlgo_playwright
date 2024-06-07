//const{Loginpage}=require('./Loginpage')
import { test, expect } from '@playwright/test';
import{Loginpageindsalgo} from '../pages/Loginpage';
import{Datastructureindsalgo} from '../pages/Datastructurepage';
import{Arrayindsalgo} from '../pages/Arraypage';
class POManager{

constructor (page)
{
this.page=page
this.loginpage=new Loginpageindsalgo(this.page);
this.Datastructurepage=new Datastructureindsalgo(this.page)
this.Arraypage=new Arrayindsalgo(this.page)
this.Datastrdropdown="//*[@class='nav-link dropdown-toggle']"
this.Datadropmenu='.dropdown-menu a'
this.tryhere='.btn.btn-info'
this.trywrite='.CodeMirror-scroll'
this.Run="//button[normalize-space()='Run']" 
this.Runoutput="//pre[@id='output']"
}
getLoginpageindsalgo()
{
    return this.loginpage;
}
getDatastructureindsalgo()
{
    return this.Datastructurepage;
}
getArrayindsalgo()
{
    return this.Arraypage;
}
async Datadropdown()
{
    await this.page.locator(this.Datastrdropdown).click()
}

async getdropdown(Datadrop)
{
const options = await this.page.$$(this.Datadropmenu);
    for (const option of options) {
        if (Datadrop == await option.textContent()) {
            await option.click();
            break;
        }
    }
}

async gettryhere()
{
    await this.page.locator(this.tryhere).click()
    await this.page.locator(this.trywrite).click()
    await this.page.getByRole('textbox').fill('print("Regression Test on Try Editor ")')
    await this.page.locator(this.Run).click()
    await expect(await this.page.locator(this.Runoutput)).toHaveText('Regression Test on Try Editor '); 
}
}
module.exports={POManager}