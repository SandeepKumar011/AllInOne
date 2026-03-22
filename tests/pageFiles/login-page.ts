
import { expect, Page } from "@playwright/test";

export default class LoginPage {

  constructor(private page: Page) {}

   get usrnameTextField() {
    return this.page.locator("//input[@name='username']");
   }

   get passwordTextField() {
    return this.page.locator("//input[@name='password']");
   }

    get submitButton() {
    return this.page.locator("//button[@type='submit']");
   }

   get dashBoadField(){
   return this.page.locator("//img[@alt='client brand banner']");
   }

   async login(username: string, password: string){
     await this.usrnameTextField.fill(username);
     await this.passwordTextField.fill(password);
     await this.submitButton.click();
   }

   async validateDashboard(){
     await this.page.waitForLoadState("networkidle");
     await expect(await this.dashBoadField).toBeVisible();
   }
   
}

