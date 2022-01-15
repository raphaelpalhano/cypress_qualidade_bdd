/// <reference types="cypress"/>

import HomeAutomationElements from '../elements/homeAutomationElements'

const homeAutomationElements = new HomeAutomationElements
const url = Cypress.config('baseUrl')

class HomeAutomationPage{

    acessingPlatform(){
        cy.visit(url)
    }
    
    clickInButtonLogin(){
        cy.get(homeAutomationElements.botaoLogin()).click()
    }
}

export default HomeAutomationPage