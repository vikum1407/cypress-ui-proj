import FirstRegPage from "./FirstStepRegPage";

/// <reference types="Cypress"/>

class SecondRegPage extends FirstRegPage{

    constructor(){
        super();
        this.step2 = "div[class='e57zfx40 css-7mprio e1pg1gpv0'] div:nth-child(3)";
        this.pageLabel = ".css-n0bual.e1d8jnas0";
        this.joinButton = ".e57zfx40.css-46l6sn.e1pg1gpv0";
    }

    firstRegPage = new FirstRegPage();

    validatePage2Label(){
        cy.get(this.pageLabel).should('have.text', 'A few more details')
    }

    validateJoinBtn(){
        cy.get(this.joinButton).should('not.be.enabled'); 
        super.backgColorValidationMethod(this.joinButton, 'rgba(0, 0, 0, 0)');
    }

    checkStep1Btn(){
        //cy.get(this.firstRegPage.step1).should('have.css', 'background-color', 'rgb(0, 83, 29)');
        super.backgColorValidationMethod(this.firstRegPage.step1, 'rgb(0, 83, 29)');
    }

    validateStep2Btn(){
        cy.get(this.step2).should('have.css', 'background-color', 'rgb(0, 83, 29)');
        //super.backgColorValidationMethod(this.step2, 'rgb(0, 83, 29)');
    }

}

export default SecondRegPage;