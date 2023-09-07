import WelcomePage from "../pages/WelcomePage";
/// <reference types = "Cypress" />

describe('Welcome Page Automation', ()=>{

    const welcomePage = new WelcomePage();
    
    beforeEach(() =>{
        cy.visit("https://www.unibet.co.uk/registration");
        welcomePage.closeCookies();
        cy.clearCookies();
    })

    afterEach(() => {
       cy.clearLocalStorage();
    });

    it('Page Title Validation', () =>{
        welcomePage.pageTitleValidation();
    });

    it('Promotion Count Validation', () =>{
        welcomePage.PromoValidation();
    })

    it.only('Verify Fist Promotion Selected', ()=>{
        welcomePage.firstPromotionValidation();
    })

    it('IWont Button Color Validation', ()=>{
        welcomePage.iWantButtonColorValidation();
    })

    it('Click Skip Button', () =>{
        welcomePage.clickSkipBtn();
    })
})