import { expect, Page } from "@playwright/test";

export default class GrammerLoginPage {

     constructor(private page: Page) {}

     public get username() {
         return this.page.locator("//input[@id='email']");
     }


     public get pssword() {
         return this.page.locator("//input[@id='password']");
     }

     public get loginButton() {
         return this.page.locator("//button[normalize-space(text())='Continue']");
     }

      public get openCalendra() {
         return this.page.locator("//img[@class='imgdp']");
     }

      public get particulardate() {
         return this.page.locator("//a[normalize-space(text())='10']");
     }

     public async login(username: string, password: string) {
            await this.username.waitFor({ state: 'visible', timeout: 60000 });
            await this.username.fill(username);
            await this.pssword.fill(password);
            await this.loginButton.click();
     }

        public async validateLogin() {
            await this.page.waitForLoadState("networkidle");
            const dashboardElement = this.page.locator("//h1[normalize-space(text())='Welcome to Ginger']");
            await dashboardElement.waitFor({ state: 'visible', timeout: 60000 });
            await expect(dashboardElement).toBeVisible();
        }

        public async selectDate() {
            await this.page.waitForLoadState("networkidle");
            await this.openCalendra.click();
            await this.particulardate.click();
        }
    }