Feature: add user the Feature

@Regression @Smoke
Scenario: test the add user Feature
     Given user is on login page
     When user enter the login credential
     And  user click on the login button
     Then verify user logged successfully
     When user select the add user option
     # And user enter the user details 
     # And user click on the save button
     # Then verify user added successfully