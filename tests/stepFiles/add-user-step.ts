import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import AddUserPage from "../pageFiles/add-user-page";
import LoginPage from "../pageFiles/login-page";

let addUserPage:AddUserPage;
let loginPage: LoginPage;

When(/^user select the add user option$/,async () => {
	addUserPage=new AddUserPage(pageFixture.page);
	loginPage = new LoginPage(pageFixture.page);
	await addUserPage.selectAdminOption();
	await addUserPage.selectAdminButton();

});

When(/^user enter the user details$/, async() => {
	await pageFixture.page.waitForLoadState("networkidle");
	await addUserPage.selectDropDown();
	await pageFixture.page.waitForLoadState("networkidle");
	await addUserPage.selectDropDownValues();
	await addUserPage.enterEmployeeName("John Smith");
	await addUserPage.enterUserName("john.smith");
	await addUserPage.enterPassword("Password123");
	await addUserPage.enterConfirmPassword("Password123");
	await addUserPage.selectStatusDropDown();
	await addUserPage.selectStatusDropDownValues();
});

When(/^user click on the save button$/, async () => {
	await addUserPage.saveOption.click();
});

Then(/^verify user added successfully$/, async () => {
	 await loginPage.validateDashboard();
});
