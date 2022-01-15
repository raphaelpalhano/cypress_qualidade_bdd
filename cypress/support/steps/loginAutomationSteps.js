import LoginAutomationPage from "../pageObjects/loginAutomationPage";

const loginAutomationPage = new LoginAutomationPage;

And('efetua o login', () =>{
    loginAutomationPage.typeUserName()
    loginAutomationPage.typePassword()
    loginAutomationPage.clickButtonSignIn()
})


