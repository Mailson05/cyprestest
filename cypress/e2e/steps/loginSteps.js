/// < reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given('que eu estou na pagina de login do saucedemo', () => {
    cy.log('Acessando a página de login do saucedemo');
    cy.visit('https://www.saucedemo.com/');
});

When('eu insiro o usuario e a senha correta', () => {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
}