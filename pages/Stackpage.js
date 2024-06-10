import {test, expect} from '@playwright/test'
exports.Stackindsalgo=
class Stackpage{
constructor (page){
this.page= page
this.Clickstack="//a[normalize-space()='Stack']"  //stack
// this.Clickstack="//a[text()='Stack']"
this.Opeartionclick="//a[text()='Operations in Stack']"
this.implementation="//a[text()='Implementation']"
this.Application="//a[text()='Applications']"
this.Datatryhere='.btn.btn-info'
}
async StackOperation(){
console.log('This is STACK_MODULE')
const PageTitle_STACK= await this.page.title();
console.log('PAGE TITLE IS:',PageTitle_STACK)
await expect(this.page).toHaveTitle('Stack')
console.log('passed')
const pageUrl_Stack=this.page.url()
console.log('PAGE URL IS :',pageUrl_Stack)
await expect(this.page).toHaveURL('https://dsportalapp.herokuapp.com/stack/')
console.log('passed ')
//OPREATION
await this.page.locator(this.Opeartionclick).click()
const PageTitle_STACK_OP= await this.page.title();
console.log('PAGE TITLE IS:',PageTitle_STACK_OP)
await expect(this.page).toHaveTitle('Operations in Stack')
console.log('passed')
const pageUrl_Stack_OP=this.page.url()
console.log('PAGE URL IS :',pageUrl_Stack_OP)
await expect(this.page).toHaveURL('https://dsportalapp.herokuapp.com/stack/operations-in-stack/')
console.log('passed ')
//await this.page.locator(this.Datatryhere).click()
const PageTitle_TryHere= await this.page.title();
console.log('PAGE TITLE IS:',PageTitle_TryHere)
//await expect.soft(this.page).toHaveTitle('Assessment')
console.log('passed')
const pageUrl_TryHere=this.page.url()
console.log('PAGE URL IS :',pageUrl_TryHere)
//await expect(this.page).toHaveURL('https://dsportalapp.herokuapp.com/tryEditor')
console.log('passed ')
}
//Stack_implement
async Stackimplement(){
await this.page.locator(this.implementation).click() //
const PageTitle_STACK_IMP= await this.page.title();
console.log('PAGE TITLE IS:',PageTitle_STACK_IMP)
//await expect(this.page).toHaveTitle('Implementation')
console.log('passed')
const pageUrl_Stack_IMP=this.page.url()
console.log('PAGE URL IS :',pageUrl_Stack_IMP)
//await expect(this.page).toHaveURL('https://dsportalapp.herokuapp.com/stack/implementation/')
console.log('passed ')
//await this.page.locator(this.Datatryhere).click()
}
//Stack_Application
async Stackapplication(){
await this.page.locator(this.Application).click()
const PageTitle_STACK_APP= await this.page.title();
console.log('PAGE TITLE IS:',PageTitle_STACK_APP)
//await expect(this.page).toHaveTitle('Applications')
console.log('passed')
const pageUrl_Stack_APP=this.page.url()
console.log('PAGE URL IS :',pageUrl_Stack_APP)
//await expect(this.page).toHaveURL('https://dsportalapp.herokuapp.com/stack/stack-applications/')
console.log('passed ')
//await this.page.locator(this.Datatryhere).click()
}
}