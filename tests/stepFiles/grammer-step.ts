import { Given, Then } from "@cucumber/cucumber";
import { pageFixture }  from "../../hooks/pageFixture";
import GrammerLoginPage from "../pageFiles/grammer-login-page";

let grammerLoginPage: GrammerLoginPage;
     
     Given('user enter the username and password', async function () {
         await pageFixture.page.goto("https://demo.automationtesting.in/Datepicker.html?utm_source=chatgpt.com");
         await pageFixture.page.waitForLoadState("networkidle");
         console.log("User is on login page and enter the username and password");
         grammerLoginPage = new GrammerLoginPage(pageFixture.page);
         await grammerLoginPage.selectDate();

         });
       

         Given('user click on the login button for graammer', async function () {
           console.log("User click on the login button for graammer");
         });
       
       
         Then('verify user logged in successfully', async function () {
           console.log("Verifying user login");
           //await grammerLoginPage.validateLogin();
         });
       