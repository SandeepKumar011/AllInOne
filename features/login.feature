Feature: login the Feature

@Smoke
Scenario: test the login Feature
     Given user is on login page
     When user enter the login credential
     And  user click on the login button
     Then verify user logged successfully