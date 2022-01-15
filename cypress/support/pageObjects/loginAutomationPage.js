/// <reference types="cypress"/>

import LoginAutomationElements from "../elements/loginAutomationElements";
import * as dataAcess from "../../fixtures/acess.automation.json";

const loginAutomationElements = new LoginAutomationElements

class LoginAutomationPage{

    typeUserName(){
        cy.get(loginAutomationElements.userInput()).type(dataAcess.acess.username)
        
    }

    typePassword(){
        cy.get(loginAutomationElements.passwordInput()).type(dataAcess.acess.password)
    }
    
    clickButtonSignIn(){
        cy.get(loginAutomationElements.buttonSignIn()).click()
    }
    
}

export default LoginAutomationPage