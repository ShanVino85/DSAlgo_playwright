const { test, expect } = require('@playwright/test');
const{POManager}=require('../pages/POManager')

/*const path = require("path");
const { pathToFileURL } = require("url");
const xlsx = require("xlsx");

const filePath = pathToFileURL("Excel\\Dsalgo_Data.xlsx");

const workbook = xlsx.readFile(filePath);
const sheetNames = workbook.SheetNames;

const data1 = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]])
console.log(data1)
*/
const xlsx = require('xlsx');
//const workbook = xlsx.readFile('Excel\\Dsalgo_Data.xlsx');
const workbook = xlsx.readFile('utilis\\Dsalgo_Data.xlsx');
const sheetNames = workbook.SheetNames;
const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);
console.log(sheetData)
const testdatajson = JSON.parse(JSON.stringify(sheetData));
//Js--->string--->json
//const testdatajson=JSON.parse(JSON.stringify(require(xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]))))

for(const data of testdatajson){
    test(`Login with users ${data.id}`,async({page}) =>{
   //test('Loginpagedsalgo' ,async({page}) =>{
 
     const poManager=new POManager(page)
     const Login=poManager.getLoginpageindsalgo()
     const Datastr=poManager.getDatastructureindsalgo()
     const array=poManager.getArrayindsalgo()
     const Treelinks=poManager.getAccessTreeTopics()
     const Queuelinks=poManager.getAccessQueueTopics()
     const stackpg=poManager.getStackindsalgo()
     const grapgpg=poManager.getGraphdsalgo()
     const Linklist=poManager.getLinkedListPage()
   // const Login=new Loginpageindsalgo(page);
   
    //Login
    await Login.gotohomepage();
    await Login.clicksignin(data.username,data.password);
    //await page.waitForTimeout(3000);
    
    //Datastructurepage
    await Datastr.gotoDatastrupage()
    await poManager.gettryhere()
  // await page.waitForTimeout(3000);
    await page.goBack()
     await poManager.Datadropdown()
    await Datastr.dropassert()
    await poManager.getdropdown('Arrays')
    await page.waitForTimeout(2000);

    //Arraypage
    await array.Arraypage()
    await poManager.gettryhere()
   // await page.waitForTimeout(2000);
    await page.goBack()
     await array.arraysinlist()
     await poManager.gettryhere()
     //await page.waitForTimeout(2000);
     await page.goBack()
     await array.basicopertioninlist()
     await poManager.gettryhere()
     //await page.waitForTimeout(2000);
     await page.goBack()
     await array.applicationinArrays()
     await poManager.gettryhere()
     //await page.waitForTimeout(2000);
     await page.goBack()
     //await page.waitForTimeout(2000);
    // await poManager.Datadropdown()
   // await poManager.getdropdown('Linked List')
    //await page.waitForTimeout(2000);

     //Stack
     await poManager.Datadropdown()
    await poManager.getdropdown('Stack')
    //await page.waitForTimeout(2000);
   // await stackpg.Stack()
   //Stack_Moduled
    await stackpg.StackOperation()
    await poManager.gettryhere()
    await page.waitForTimeout(2000);
    await page.goBack()
    await stackpg.Stackimplement()
   await poManager.gettryhere()
   await page.goBack()
   await stackpg.Stackapplication()
   await poManager.gettryhere()
   await page.goBack()
   await poManager.Datadropdown()
    await poManager.getdropdown('Graph')

     //Graph
    // await page.waitForTimeout(2000);
    await grapgpg.gotoGraphpage()
    await poManager.gettryhere()
    await page.goBack()
   // await page.waitForTimeout(2000);
    await grapgpg.gotoGraphRep()
    await poManager.gettryhere()
    await page.goBack()
   // await page.waitForTimeout(2000);
   await poManager.Datadropdown()
    await poManager.getdropdown('Linked List')

    

    //first introduction in ll
    //await poManager.Datadropdown()
    //await poManager.getdropdown('Linked List')
    await Linklist.clickonintroduction()
    //await page.waitForTimeout(1000)
    await poManager.checkurl('https://dsportalapp.herokuapp.com/linked-list/introduction/')
    await poManager.gettryhere()
    //await page.waitForTimeout(1000)
    await page.goBack();
    //second link in ll
    await page.waitForTimeout(3000)
    await Linklist. clickoncreatelinkedlist();
    await poManager.checkurl('https://dsportalapp.herokuapp.com/linked-list/creating-linked-list/')
    await poManager.gettryhere()
    //await page.waitForTimeout(1000)
   await poManager.expectoutputTobeVisible();
    await page.goBack();
    //await page.waitForTimeout(2000)
//     //third link in ll
    await Linklist.clickontypesoflinkedlist();
    await poManager.checkurl('https://dsportalapp.herokuapp.com/linked-list/types-of-linked-list/')
    //await page.waitForTimeout(2000)
    await poManager.gettryhere()
   // await page.waitForTimeout(1000)
    await poManager.expectoutputTobeVisible();
    await page.goBack();
   // await page.waitForTimeout(2000)
// //     //4th link in ll
    await Linklist.clickonimpelementlinkedlist();
     await poManager.checkurl('https://dsportalapp.herokuapp.com/linked-list/implement-linked-list-in-python/')
   // await page.waitForTimeout(2000)
    await poManager.gettryhere()
 //await page.waitForTimeout(1000)
   await poManager.expectoutputTobeVisible();
    await page.goBack();
    //await page.waitForTimeout(2000)
//     //5th link in ll
    await Linklist.clickontraversalinll();
    await poManager.checkurl('https://dsportalapp.herokuapp.com/linked-list/traversal/')
    await poManager.gettryhere()
   // await page.waitForTimeout(1000)
    await poManager.expectoutputTobeVisible();
    //await POManager.expectoutput('Hello World');
    await page.goBack();
   // await page.waitForTimeout(2000)
// //6th link in ll
await Linklist.clickoninsertioninll();
    await poManager.checkurl('https://dsportalapp.herokuapp.com/linked-list/insertion-in-linked-list/')
    await poManager.gettryhere()
   // await page.waitForTimeout(1000)
   await poManager.expectoutputTobeVisible();
    await page.goBack();
    //await page.waitForTimeout(2000)
//     //7th link in ll
    await Linklist.clickondeletioninll();
    await poManager.checkurl('https://dsportalapp.herokuapp.com/linked-list/deletion-in-linked-list/')
    //await page.waitForTimeout(2000)
    await poManager.gettryhere()
   // await page.waitForTimeout(1000)
   await poManager.expectoutputTobeVisible();
    await page.goBack();
    //await page.waitForTimeout(2000)
//     //8th link in ll
    await Linklist.clickonpracticequestions();
    await poManager.checkurl('https://dsportalapp.herokuapp.com/linked-list/practice')
    await page.goBack();
  //  await page.waitForTimeout(2000)

   /* Queue
    await poManager.Datadropdown()
    await poManager.getdropdown('Queue')
    await Queuelinks.AccessQueueLinks()


    //Tree
    await poManager.Datadropdown()
    await poManager.getdropdown('Tree')
    await Treelinks.AccessTreeLinks()*/
    

    //logout
    await poManager.clicklogout()
  await poManager.checkurl('https://dsportalapp.herokuapp.com/home')
  await poManager.Logoutmessage('Logged out successfully')
    

    
})
    }

   