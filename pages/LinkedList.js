import {test, expect} from '@playwright/test'
exports.Linkedindsalgo=class LinkedList{
    constructor (page){
    this.page=page;
    this.introductioninll="//a[normalize-space()='Introduction']"
   this.createlinkedlist="//a[normalize-space()='Creating Linked LIst']"
this.typesofllinkedlist="//a[normalize-space()='Types of Linked List']"
this.impelementlinkedlist="//a[normalize-space()='Implement Linked List in Python']"
this.traversalinll="//a[normalize-space()='Traversal']"
this.insertioninll="//a[normalize-space()='Insertion']"
this.deletioninll="//a[normalize-space()='Deletion']"
this.practiceques="//a[normalize-space()='Practice Questions']"
}
async clickonintroduction(){
    await this.page.locator(this.introductioninll).click();
}
async clickoncreatelinkedlist(){
    await this.page.locator(this.createlinkedlist).click();
}
async clickontypesoflinkedlist(){
    await this.page.locator(this.typesofllinkedlist).click();
}
async clickonimpelementlinkedlist(){
    await this.page.locator(this.impelementlinkedlist).click();
}
async clickontraversalinll(){
    await this.page.locator(this.traversalinll).click();
}
async clickoninsertioninll(){
    await this.page.locator(this.insertioninll).click();
}
async clickondeletioninll(){
    await this.page.locator(this.deletioninll).click();
}
async clickonpracticequestions(){
    await this.page.locator(this.practiceques).click();
}
}