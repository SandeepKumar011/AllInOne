
import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import LoginPage from "../pageFiles/login-page";

let loginPage: LoginPage;

Given("user is on login page", async function () {
  await pageFixture.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  loginPage = new LoginPage(pageFixture.page);
});

When("user enter the login credential", async function () {
  await loginPage.login("Admin", "admin123");
});

When("user click on the login button", async function () {
 console.log('submit button is click on above step');
});

Then("verify user logged successfully", async function () {
  await loginPage.validateDashboard();

});
