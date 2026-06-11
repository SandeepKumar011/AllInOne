import { expect, Page } from "@playwright/test";


export default class DeleteUserPage {

    constructor(private page: Page) {}

    get deleteUserButton() {
        return this.page.locator(`//input[@name='username']`);
     }

      get enterUsernameInput() {
        return this.page.locator(`//input[@name='username']`);
     }

     public async selectUserToDelete() { 
        await this.page.waitForLoadState("networkidle");
        await this.deleteUserButton.click();
     }

     public async enterUsername(username: string) {
        await this.enterUsernameInput.fill(username);
     }
     }