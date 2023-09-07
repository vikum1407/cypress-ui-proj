import WelcomePage from "../pages/WelcomePage";
import FirstRegPage from "../pages/FirstStepRegPage";
/// <reference types = "Cypress" />

describe('First Registration Page Validation', () =>{

    const welcomePage = new WelcomePage();
    const firstRegPage = new FirstRegPage();

    beforeEach(() =>{
        cy.visit("https://www.unibet.co.uk/registration");
        welcomePage.closeCookies();
        cy.clearCookies();
        welcomePage.clickSkipBtn();
    });

    it('Visibility of the Registration page', () =>{
        firstRegPage.validatePageLabel();
    });

    it('Validate Step1 Button', () =>{
        firstRegPage.validateStep1Btn();
    });

    it.skip('Visibility of All Fields', () =>{
        firstRegPage.visibilityOfAllFields();
    });

    it('Validate Continue Button', () =>{
        firstRegPage.validateContinueBtn();
    })

    // it('Email Field Validation', () =>{
        
    //     firstRegPage.validateEmailField(true);

    //     firstRegPage.validateEmailField(false);
    // })

    it.only('Email Field Validation', () =>{
        
        //firstRegPage.validEmail('@vikum@gmail.com')
        //firstRegPage.validateEmailField(true)
        cy.fixture('email.json').then((udata) =>{
            udata.forEach((uedata) =>{
                firstRegPage.validateEmailField(uedata.val);
            })
        })
    })
    
    it('First Reg', ()=>{
        firstRegPage.firstPageReg(false);
    })
})