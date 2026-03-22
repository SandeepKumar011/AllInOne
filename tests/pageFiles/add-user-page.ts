import { expect, Page } from "@playwright/test";

export default class AddUserPage {

    constructor(private page: Page) {}

    get adminOption() {
    return this.page.locator("//a[@href='/web/index.php/admin/viewAdminModule']");
   }

    get addButton() {
    return this.page.locator("//button[normalize-space()='Add']");
   }

   get dropdown() {
    return this.page.locator("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[1]");
   }

    get dropdownValues() {
    return this.page.locator("//div[@role='listbox']//span[text()='Admin']");
   }

    get employeeName() {
    return this.page.locator("(//input[@placeholder='Type for hints...'])[1]");
   }

     get dropdownStatus() {
    return this.page.locator("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[2]");
   }

    get dropdownValuesStatus() {
    return this.page.locator("(//div[@tabindex='0'])[1]");
   }

   get username() {
    return this.page.locator("(//input[@class='oxd-input oxd-input--active oxd-input--error'])[1]");
   }

     get password() {
    return this.page.locator("(//input[@type='password'])[1]");
   }

   get passwordConfirm() {
    return this.page.locator("(//input[@type='password'])[2]");
   }

    get saveOption() {
    return this.page.locator("//button[@type='submit']");
   }

   async selectAdminOption(){
     await this.page.waitForLoadState("networkidle");
     await (await this.adminOption).click();
   }

    async selectAdminButton(){
     await this.page.waitForLoadState("networkidle");
     await (await this.addButton).click();
   }

   async selectDropDown(){
     await this.page.waitForLoadState("networkidle");
     await (await this.dropdown).click();
   }

   async selectDropDownValues(){
     await this.page.waitForLoadState("networkidle");
     await (await this.dropdownValues).click();
   }

    async enterEmployeeName(epmName: string){
     await this.employeeName.fill(epmName);
   }

    async enterPassword(epmName: string){
     await this.password.fill(epmName);
   }

    async enterConfirmPassword(epmName: string){
     await this.passwordConfirm.fill(epmName);
   }

    async enterUserName(epmName: string){
     await this.username.fill(epmName);
   }

   async selectStatusDropDown(){
     await this.page.waitForLoadState("networkidle");
     await (await this.dropdownStatus).click();
   }

   async selectStatusDropDownValues(){
     await this.page.waitForLoadState("networkidle");
     await (await this.dropdownValuesStatus).click();
   }
}