import FirstRegPage from "../pages/FirstStepRegPage";
import SecondRegPage from "../pages/SecondStepRegPage";
import WelcomePage from "../pages/WelcomePage";

/// <reference types = "Cypress" />

describe('Automate Second Registration Page', () =>{

    const welcomePage = new WelcomePage();
    const firstRegPage = new FirstRegPage();
    const secondRegPage = new SecondRegPage();

    beforeEach(() =>{
        cy.visit("https://www.unibet.co.uk/registration");
        welcomePage.closeCookies();
        cy.clearCookies();
        welcomePage.clickSkipBtn();
        firstRegPage.firstPageReg();
    });

    it('Second Page Reg Form check', () =>{
        secondRegPage.validatePage2Label();
    });

    it('Step1 button validation', ()=>{
        secondRegPage.checkStep1Btn();
    })

    it('Join Button validation', () =>{
        secondRegPage.validateJoinBtn();
    });

    it.only('Validate Step2 button', ()=>{
        secondRegPage.validateStep2Btn();
    })
})