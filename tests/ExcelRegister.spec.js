import {test, expect} from '@playwright/test'
const{POManager}=require('../pages/POManager')

const xlsx = require('xlsx');
const workbook = xlsx.readFile('Excel\\Dsalgo_Data.xlsx');
const sheetNames = workbook.SheetNames;
const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[1]]);
console.log(sheetData)
const testdatajson = JSON.parse(JSON.stringify(sheetData));

for(const data of testdatajson){
    //test(`Login with users ${data.id}`,async({page}) =>{
test('Registerpage',async({page})=>{
    const poManager=new POManager(page)
    const Login=poManager.getLoginpageindsalgo()
    await Login.gotohomepage('https://dsportalapp.herokuapp.com/');
    await poManager.clickregisterattop()
    await page.waitForTimeout(1000)
    await poManager.checkurl('https://dsportalapp.herokuapp.com/register')
    await poManager.clickregisteratbottom(data.username ,data.pwd1 ,data.pwd2 )
   // await poManager.clickregisteratbottom("science01123","javalang$","javalang$")
    await page.waitForTimeout(1000)
    await poManager.checkurl('https://dsportalapp.herokuapp.com/home')
    await page.waitForTimeout(1000)
    await poManager.Message("New Account Created. You are logged in as 'data.username'")
    await page.waitForTimeout(1000)
})
    //check login an d sign in
   /* test.skip('click and sign in',async({page})=>{
        const poManager=new POManager(page)
        await poManager.gotoregisterpage('https://dsportalapp.herokuapp.com/register');
        await poManager.clickonsloginrp()
        await page.waitForTimeout(1000)
        await poManager.checkurl('https://dsportalapp.herokuapp.com/login')
        await page.goBack();
        await poManager.clickonsigninrp()
        await page.waitForTimeout(1000)
        await poManager.checkurl('https://dsportalapp.herokuapp.com/login')
        await page.goBack();
})
//check dropdown in registerpage
test.skip
('dropdown',async({page})=>{
    const poManager=new POManager(page)
    await poManager.gotoregisterpage('https://dsportalapp.herokuapp.com/register');
    await poManager.Datadropdown()
//click arrays from dropdown
    await poManager.getdropdown('Arrays')
   await poManager.checkurl('https://dsportalapp.herokuapp.com/home')
   await page.waitForTimeout(2000)
   await poManager.Message("You are not logged in")
   await page.waitForTimeout(2000)
   await page.goBack();
   await page.waitForTimeout(2000)
   //click linkedlist from dropdown
   await poManager.Datadropdown()
   await poManager.getdropdown('Linked List')
   await poManager.checkurl('https://dsportalapp.herokuapp.com/home')
   await page.waitForTimeout(2000)
   await poManager.Message("You are not logged in")
   await page.goBack();
   await page.waitForTimeout(2000)
   //click stack from dropdown
   await poManager.Datadropdown()
   await poManager.getdropdown('Stack')
   await poManager.checkurl('https://dsportalapp.herokuapp.com/home')
   await page.waitForTimeout(2000)
   await poManager.Message("You are not logged in")
   await page.goBack();
   await page.waitForTimeout(2000)
   //click queue from dropdown
   await poManager.Datadropdown()
   await poManager.getdropdown('Queue')
   await poManager.checkurl('https://dsportalapp.herokuapp.com/home')
   await page.waitForTimeout(2000)
   await poManager.Message("You are not logged in")
   await page.goBack();
   await page.waitForTimeout(2000)
   //click tree from dropdown
   await poManager.Datadropdown()
   await poManager.getdropdown('Tree')
   await poManager.checkurl('https://dsportalapp.herokuapp.com/home')
   await page.waitForTimeout(2000)
   await poManager.Message("You are not logged in")
   await page.goBack();
   await page.waitForTimeout(2000)
   //click graph from dropdown
   await poManager.Datadropdown()
   await poManager.getdropdown('Graph')
   await poManager.checkurl('https://dsportalapp.herokuapp.com/home')
  // await page.waitForTimeout(2000)
   await poManager.Message("You are not logged in")
   await page.goBack();
   //await page.waitForTimeout(2000)
})*/
}