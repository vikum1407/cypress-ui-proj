class WelcomePage{

    constructor(){
        this.promotions = "[data-dn='bonus-offer']>[data-dn='VerticalStack']";
        this.promoAll = "[data-dn='bonus-offer']>[data-dn='VerticalStack']:first-child>div>div>div"
        this.firstPromotion = "div[class='e57zfx40 css-1b8sbg0 e1pg1gpv0'] div[class='css-vvjid4 e1pg1gpv0']";
        this.IwantButton = ".css-1stnc37.euvk28v0";
        this.skipButton = ".css-uudof1.e1f6nj7d0";
        this.firstPromo = "body > div:nth-child(4) > div:nth-child(5) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)";
        this.selectedBtn = "//div[@class='css-1k1ocwi e1pg1gpv0']/../../..//span[text()='Selected']";
        this.cookiesbtn = "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll";
    }
    
    pageTitleValidation(){
        cy.title().should('eq', 'Register with Unibet Today')
    }

    closeCookies(){
        cy.get(this.cookiesbtn).should('exist').click();
        // /*cy.get(this.cookiesbtn).should('exist').then(($coBtn) =>{
        //     if($coBtn.length > 0){
        //         cy.wrap($coBtn).click();
        //     }
        // });*/       
    }

    PromoValidation(){
        cy.get(this.promotions).should((elements) => {
            expect(elements.length).to.be.greaterThan(0)
        });
    }

    firstPromotionValidation(){ 
        cy.wait(2000);
        cy.get(this.promoAll).first().invoke('text').then((text) => {
            expect(text).to.equal('Selected');
          });
    }

    iWantButtonColorValidation(){
        //cy.get(this.IwantButton).should('have.css', 'background-color', 'rgb(255, 231, 31)');
        this.colorValidationMethod(this.IwantButton, 'rgb(17, 17, 17)')
    }

    clickSkipBtn(){
        cy.get(this.skipButton).click();
    }

    colorValidationMethod(element, calCode){
        cy.get(element).invoke('css', 'color').then((color) => {
            expect(color).to.equal(calCode);
          });
    }

    backgColorValidationMethod(element, calCode){
        cy.get(element).invoke('css', 'background-color').then((color) => {
            expect(color).to.equal(calCode);
          });
    }
}

export default WelcomePage;