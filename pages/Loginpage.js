import { test, expect } from '@playwright/test';
exports.Loginpageindsalgo=
class Loginpage{
    
    constructor (page){
    this.page=page;
    this.GetStart="//button[text()='Get Started']"
    this.signinbutton="//a[normalize-space()='Sign in']"
    this.username=" //input[@id='id_username']"
    this.password="//input[@id='id_password']"
    this.login="input[value='Login']"
    this.numpy="//a[normalize-space()='NumpyNinja']"
    this.loggedin="//div[@role='alert']"
    }
async gotohomepage(){
    //await this.page.goto('https://dsportalapp.herokuapp.com/home')
    await this.page.goto('https://dsportalapp.herokuapp.com')
    await this.page.locator(this.GetStart).click()
}
async clicksignin(username,password){
    await this.page.locator(this.signinbutton).click();
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.login).click();
    await expect(await this.page.locator(this.numpy)).toHaveText('NumpyNinja');
    await expect(await this.page.locator(this.loggedin)).toHaveText('You are logged in');  //fulltest
}
}
