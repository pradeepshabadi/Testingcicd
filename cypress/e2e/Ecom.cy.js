
//cy.fixure().then(()={ }) because its not chainable
//cy.visit(Cypress.env('url)) to access env variables from cypress.config.js
//cy.sumitbutton() custom command caling to perform any repated action it will be in commands.js
import HomePage from "../support/POM/Homepage"; 

describe('Order place',()=>{

    before(()=>{

        cy.fixture('data').then((values)=>{
this.values=values;

        })
    })

    it('login',()=>{
        const prodName= this.values.productName
        
        const homepage= new HomePage()
        homepage.goTo('https://rahulshettyacademy.com/loginpagePractise/#'); 
        homepage.login(this.values.userName,this.values.passWord);

        cy.contains('Shop Name').should('be.visible');
        cy.get('app-card').should('have.length',4);
        cy.get('app-card').filter(`:contains("${prodName}")`).  //filter is a jquery so it return a promise so we have to resolve it by then
        
        then($value=>{   

            cy.wrap($value).contains('Add').click()  //cy.wrap() is the method to wrap the yeilded element from then() and its like a locator now like cy.get(), we can perform action on it
        }) 

        cy.get('app-card').eq(0).contains('Add').click(); //short cut to add item as we know we want to add first item
        cy.contains('Checkout').click()
        let sum=0;
cy.get('tr td:nth-child(4) strong').each($value=>{

    const amount=Number($value.text().split(' ')[1].trim())
    sum =sum+amount;
}).then(()=>{

expect(sum).to.be.lessThan(200000)
})
cy.contains('Checkout').click()
cy.get('#country').type('india')
cy.wait(2000);
cy.get('.suggestions ul li a').click()
cy.contains('Purchase').click()
cy.contains('Success! Thank you!').should('be.visible') 






})

})