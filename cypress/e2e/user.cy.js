import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField:"[name='firstName']",
    lastNameField:"[name='lastName']",
    genericField:".oxd-input--active",
    dateField:"[placeholder='yyyy-mm-dd']",
    dateCloseButton:".--close",
    submitButton:"[type='submit']",
  }
  
  
  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
     cy.get(selectorList.passwordField).type(userData.userSuccess.password)
     cy.get(selectorList.loginButton).click() 
     cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
     cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
     cy.get(selectorList.myInfoButton).click()
     cy.get(selectorList.firstNameField).type('FirstNameTest')
     cy.get(selectorList.lastNameField).type('LastNameTest')
     cy.get(selectorList.genericField).eq(2).clear().type('NicknameTest')
     cy.get(selectorList.genericField).eq(3).clear().type('Employee')
     cy.get(selectorList.genericField).eq(4).clear().type('OtherIdTest')
     cy.get(selectorList.genericField).eq(5).clear().type('DriversLicenseTest')
     cy.get(selectorList.genericField).eq(6).clear().type('2023-10-03')
     cy.get(selectorList.dateCloseButton).click()
     cy.get(selectorList.genericField).eq(6).clear().type('ssnNumberTest')
     cy.get(selectorList.genericField).eq(8).clear().type('sinNumberTest')
     cy.contains('button', 'Save').click()
     cy.get('.oxd-toast')
    .should('be.visible')
    .and('contain', 'Successfully Updated')
     //cy.get(selectorList.submitButton).eq(0).click()
     //cy.get('body').should('contain', 'Successfully Updated')
     cy.get('.oxd-toast-close')
  })


it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
     cy.get(selectorList.passwordField).type(userData.userFail.password)
     cy.get(selectorList.loginButton).click() 
     cy.get(selectorList.wrongCredentialAlert)
     
    
  })
})
