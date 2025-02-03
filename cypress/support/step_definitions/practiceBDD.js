import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'

Given('I am in login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
  })
  