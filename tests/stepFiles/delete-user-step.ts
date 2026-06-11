   import { Given, When, Then } from "@cucumber/cucumber";
   import { pageFixture } from "../../hooks/pageFixture";
   import  DeleteUserPage  from "../pageFiles/delet-user-page";
   

   let deleteUserPage: DeleteUserPage

       Given('user select the user to delete', async function () {
         await pageFixture.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        deleteUserPage = new DeleteUserPage(pageFixture.page);
        await deleteUserPage.selectUserToDelete();
         });


          Given('user click on the delete button', async function () {
          console.log("Clicking on delete button");
         });
 
         Then('verify user deleted successfully', async function () {
          console.log("Clicking on delete button   eretere");
         });