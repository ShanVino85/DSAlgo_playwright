//const{Loginpage}=require('./Loginpage')
import { test, expect } from '@playwright/test';
import{Loginpageindsalgo} from '../pages/Loginpage';
import{Datastructureindsalgo} from '../pages/Datastructurepage';
import{Arrayindsalgo} from '../pages/Arraypage';
import {Linkedindsalgo} from '../pages/LinkedList';
import {AccessTreeTopics} from '../pages/AccessTreeTopics'
import {AccessQueueTopics} from '../pages/AccessQueueTopics'
import { Stackindsalgo } from '../pages/Stackpage'
import{ Graphindsalgo } from '../pages/Graphpage'
class POManager{

constructor (page)
{
this.page=page
this.loginpage=new Loginpageindsalgo(this.page);
this.Datastructurepage=new Datastructureindsalgo(this.page)
this.Arraypage=new Arrayindsalgo(this.page)
this.linkedpage=new Linkedindsalgo(this.page);
this.treeLinks= new AccessTreeTopics(this.page)
this.queueLinks= new AccessQueueTopics(this.page)
this.stack= new Stackindsalgo(this.page)
this.graph= new Graphindsalgo(this.page)
this.Datastrdropdown="//*[@class='nav-link dropdown-toggle']"
this.Datadropmenu='.dropdown-menu a'
this.tryhere='.btn.btn-info'
this.trywrite='.CodeMirror-scroll'
this.Run="//button[normalize-space()='Run']" 
this.Runoutput="//pre[@id='output']"
this.logout="a[href='/logout']"
this.logoutmessage="//div[@role='alert']"

//locators for register
this.registerattop="//a[normalize-space()='Register']"
this.usernameinregisterpage="#id_username"
this.passwordinrp="#id_password1"
this.repeatpasswordinrp="#id_password2"
this.registeratbottom="input[value='Register']"
this.logininregisterpage="//a[normalize-space()='Login']"
this.signinresigterpage="//a[normalize-space()='Sign in']"
 this.message="//div[contains (text(), 'logged')]"
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
getAccessTreeTopics()
{
    return this.treeLinks
}
getAccessQueueTopics()
{
    return this.queueLinks
}
getStackindsalgo()
{
    return this.stack;
}

getGraphdsalgo()
{
    return this.graph;
}
getLinkedListPage()
{
    return this.linkedpage;
}
/*async clickonsigninrp()
{
    await this.page.locator(this.signinresigterpage).click()
}*/
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

async checkurl(url){
    await expect(this.page).toHaveURL(url)
    }
async expectoutputTobeVisible(){
             await expect(this.page.locator(this.Runoutput)).toBeVisible()
        }
  //Register
        async clickregisterattop(){
            await this.page.locator(this.registerattop).click();
        }
        async gotoregisterpage(url){
            await this.page.goto (url)
        }
        async clickregisteratbottom(username,pwd1,pwd2){
            await this.page.locator(this.usernameinregisterpage).fill(username);
            await this.page.locator(this.passwordinrp).fill(pwd1);
            await this.page.locator(this.repeatpasswordinrp).fill(pwd2);
             await this.page.locator(this.registeratbottom).click();
        }
        async clickonsloginrp(){
            await this.page.locator(this.logininregisterpage).click()
        }
        async clickonsigninrp(){
            await this.page.locator(this.signinresigterpage).click()
        }
        async Message(textcontent){

            await expect(this.page.locator(this.message)).toHaveText(textcontent)
           
        }



        //logout
        async clicklogout(){
            await this.page.locator(this.logout).click() 
            
        }
        async Logoutmessage(textcontent){

            await expect(this.page.locator(this.logoutmessage)).toHaveText(textcontent)
           
        }

}
module.exports={POManager}


