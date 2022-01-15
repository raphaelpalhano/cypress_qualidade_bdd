import HomeAutomationPage from '../pageObjects/homeAutomationPage';


const homeAutomationPage = new HomeAutomationPage

Given('o acesso a pltaforma automation', () =>{
    homeAutomationPage.acessingPlatform();

})


When('acessa a página de login', () =>{
    homeAutomationPage.clickInButtonLogin()
})


