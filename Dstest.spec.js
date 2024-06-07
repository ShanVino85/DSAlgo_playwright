
import { test, expect } from '@playwright/test';
//import{Loginpageindsalgo} from '../pages/Loginpage';
const{POManager}=require('../pages/POManager')
const testdatajson=JSON.parse(JSON.stringify(require("../utilis/testdata.json")))

for(const data of testdatajson){
    test(`Login with users ${data.id}`,async({page}) =>{
   //test('Loginpagedsalgo' ,async({page}) =>{
 

     const poManager=new POManager(page)
     const Login=poManager.getLoginpageindsalgo()
     const Datastr=poManager.getDatastructureindsalgo()
     const array=poManager.getArrayindsalgo()
   // const Login=new Loginpageindsalgo(page);
   
    //Login
    await Login.gotohomepage();
    await Login.clicksignin(data.username,data.password);
    await page.waitForTimeout(3000);
    
    //Datastructurepage
    await Datastr.gotoDatastrupage()
    await poManager.gettryhere()
   await page.waitForTimeout(3000);
    await page.goBack()
     await poManager.Datadropdown()
    await Datastr.dropassert()
    await poManager.getdropdown('Arrays')
    await page.waitForTimeout(2000);

    //Arraypage
    await array.Arraypage()
    await poManager.gettryhere()
    await page.waitForTimeout(2000);
    await page.goBack()
     await array.arraysinlist()
     await poManager.gettryhere()
     await page.waitForTimeout(2000);
     await page.goBack()
     await array.basicopertioninlist()
     await poManager.gettryhere()
     await page.waitForTimeout(2000);
     await page.goBack()
     await array.applicationinArrays()
     await poManager.gettryhere()
     await page.waitForTimeout(2000);
     await page.goBack()
     await page.waitForTimeout(2000);
     await poManager.Datadropdown()
    await poManager.getdropdown('Linked List')
    await page.waitForTimeout(2000);
    
})
    }

   