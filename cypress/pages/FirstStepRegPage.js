import WelcomePage from "./WelcomePage";

class FirstRegPage extends WelcomePage{

    constructor(){
        super();
        this.pageLabel = ".css-n0bual.e1d8jnas0";
        this.step1 = "div[class='e57zfx40 css-7mprio e1pg1gpv0'] div:nth-child(1)";
        this.firstName = "input[name='firstName']";
        this.lastName = "input[name='lastName']";
        this.email = "input[name='email']";
        this.password = "#password";
        this.dayDrp = "select[name='dateVal']";
        this.monthDrp = "select[name='monthVal']";
        this.yearDrp = "select[name='yearVal']";
        this.gender = "select[name='gender']";
        this.continueButton = ".e57zfx40.css-46l6sn.e1pg1gpv0";
        this.emailErrMsg = ".css-6veg94";
        this.continueBtnColr = ".css-1kfapg1.euvk28v0";
    }

    welcomePage = new WelcomePage();

    validatePageLabel(){
        cy.get(this.pageLabel).should('have.text', 'Create your account');
    }

    visibilityOfAllFields(){
        cy.get(this.firstName).should('be.visible');
        cy.get(this.lastName).should('be.visible');
        cy.get(this.email).should('be.visible');
        cy.get(this.password).should('be.visible');
        cy.get(this.dayDrp).should('be.visible');
        cy.get(this.monthDrp).should('be.visible');
        cy.get(this.yearDrp).should('be.visible');
        cy.get(this.gender).should('be.visible');
        cy.get(this.continueButton).should('be.visible');
    }

    validateEmailField(){
        cy.get(this.email).type(email);
        cy.get(this.emailErrMsg).should('have.text', 'Please enter a valid email address.')
    }

    validateEmailField(val){

        cy.fixture('email.json').then((edata) =>{
            edata.forEach((data) =>{
                if(val==true){
                    cy.get(this.email).type(data.email);
                    cy.get(this.email).clear();
                }else{
                    cy.get(this.email).type(data.email);
                    cy.get(this.emailErrMsg).should('be.visible').and('contain', 'Please enter a valid email address.')
                    cy.get(this.email).clear();
                }
            })
        })        
    }

    validateFistNameField(fname){
        cy.get(this.firstName).type(fname);
    }

    validateLastNameField(lname){
        cy.get(this.lastName).type(lname);
    }

    EmailField(email){
        cy.get(this.email).type(email);
    }

    validatePasswordField(pw){
        cy.get(this.password).type(pw);
    }

    validateDate(date){
        cy.get(this.dayDrp).select(date).should('have.value', date);
    }

    validatMonth(month){
        cy.get(this.monthDrp).select(month);
    }

    validateYear(year){
        cy.get(this.yearDrp).select(year).should('have.value', year);
    }

    validateGender(gender){
        cy.get(this.gender).select(gender);
    }

    validateContinueBtn(){
        cy.get(this.continueButton).should('not.be.enabled'); 
        super.colorValidationMethod(this.continueBtnColr, 'rgb(17, 17, 17)');

    }

    clickContinueBtn(){
        cy.get(this.continueButton).click();
    }

    firstPageReg(isValid){
        cy.fixture('unibet.json').then((data) =>{
            data.forEach((userData) =>{
                this.validateFistNameField(userData.fname);
                this.validateLastNameField(userData.lname);
                this.EmailField(userData.email);
                this.validatePasswordField(userData.pw);
                this.validateDate(userData.day);
                this.validatMonth(userData.month);
                this.validateYear(userData.year);
                this.validateGender(userData.gender);
                this.clickContinueBtn();
            })
        })
    }

    validateStep1Btn(){
        cy.get(this.step1).should('have.css', 'background-color', 'rgb(0, 83, 29)');
        //super.backgColorValidationMethod(this.step1, 'rgb(0, 83, 29)');
    }
}

export default FirstRegPage;