Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });
  
  import { Given, Then } from "cypress-cucumber-preprocessor/steps";

  Given('The user must enter a description for the new account.This part cannot be left blank.',()=>{
   
    cy.LoginCustomer2()
    cy.get('#entity-menu > .dropdown-toggle').click()
    cy.get('[href="/tp-account"] > span').click()
    cy.get('#jh-create-entity').click()
    cy.get('#tp-account-description').type('{Enter}')
    cy.get('.invalid-feedback').should('be.visible')
    cy.get('#tp-account-description').type('bla bla')
  })
  

  Then('The user must provide a balance in Dollars to create an account for the first time.',()=>{
   
    cy.get('#tp-account-balance').type(235)

  })

  Then('User can select an account type as CHECKING, SAVING, CREDIT_CARD or INVESTING.',()=>{
   
    var rnd = Math.floor((Math.random() * 4));

    cy.get('#tp-account-accountType').select(rnd)
  
    const list = ["CHECKING" , "SAVING" , "CREDIT_CARD" , "INVESTING"]

    for(let i = 0; i < list.length; i++){

      cy.get('#tp-account-accountType').should('contain.text' , list[i])

    }
    
  })

  Then('Account status should be defined as ACTIVE, SUSPENDED or CLOSED.',()=>{
   
      var rnd = Math.floor((Math.random() * 3));

      cy.get('#tp-account-accountStatusType').select(rnd)
  
      const listStatus = ["ACTIVE" , "SUESPENDED" , "CLOSED" ]

      for(let i = 0; i < listStatus.length; i++){
  
        cy.get('#tp-account-accountStatusType').should('contain.text' , listStatus[i])
  
      }
  })

  Then('User can select an employee from the drop-down menu / Optional.',()=>{
   
      cy.get('#tp-account-employee').select(0)
  
  })
  