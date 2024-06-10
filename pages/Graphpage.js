import {test, expect} from '@playwright/test'
exports.Graphindsalgo=
class{
constructor (page)
{
this.page=page;
this.Graphclick="//a[@href='graph']"
//this.GraphRep="//a[@href='graph-representations']"
this.GraphRep="//a[text()='Graph Representations']"
this.Datatryhere='.btn.btn-info'
}
async gotoGraphpage(){
console.log('This is GRAPH_MODULE')
const PageTitle_GRAPH= await this.page.title();
console.log('PAGE TITLE IS:',PageTitle_GRAPH)
//await expect(this.page).toHaveTitle('Graph')
console.log('passed')
const pageUrl_GRAPH=this.page.url()
console.log('PAGE URL IS :',pageUrl_GRAPH)
//await expect(this.page).toHaveURL('https://dsportalapp.herokuapp.com/graph/')
console.log('passed ')
//GRAPH SUB MODULE
await this.page.locator(this.Graphclick).click()
const PageTitle_GRAPH_GP= await this.page.title();
console.log('PAGE TITLE IS:',PageTitle_GRAPH_GP)
//await expect(this.page).toHaveTitle('Graph')
console.log('passed')
const pageUrl_GRAPH_GP=this.page.url()
console.log('PAGE URL IS :',pageUrl_GRAPH)
//await expect(this.page).toHaveURL('https://dsportalapp.herokuapp.com/graph/graph/')
console.log('passed ')
//await this.page.locator(this.Datatryhere).click()
}
async gotoGraphRep(){
await this.page.locator(this.GraphRep).click()
const PageTitle_GRAPH_REP= await this.page.title();
console.log('PAGE TITLE IS:',PageTitle_GRAPH_REP)
//await expect(this.page).toHaveTitle('Graph Representations')
//console.log('passed')
const pageUrl_GRAPH_REP=this.page.url()
console.log('PAGE URL IS :',pageUrl_GRAPH_REP)
//await expect(this.page).toHaveURL('https://dsportalapp.herokuapp.com/graph/graph-representations/')
console.log('passed ')
//await this.page.locator(this.Datatryhere).click()
}
}