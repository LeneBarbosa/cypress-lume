import userData from '../fixtures/user-data.json'
import LoginPage from './pages/loginPage' 
import DashboardPage from './pages/dashboardPage'
import MenuPage from './pages/menuPages'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()



describe('Orange HRM Tests', () => {

  const selectorList = {
    
    firstNameField:"[name='firstName']",
    lastNameField:"[name='lastName']",
    genericField:".oxd-input--active",
    dateField:"[placeholder='yyyy-mm-dd']",
    genericCombobox:".oxd-select-text--arrow",
    secondItemCombobox:".oxd-select-dropdown > :nth-child(2)",
    thirdItemCombobox:".oxd-select-dropdown > :nth-child(3)",
    dateCloseButton:".--close",
    submitButton:"[type='submit']",
    
  }
  
  
  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage ()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
     
     
     //cy.get(selectorList.firstNameField).type('FirstNameTest')
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
    cy.contains('Successfully Updated')
     //cy.contains('button', 'Save').click()
     //cy.get('.oxd-toast')
    //.should('be.visible')
    //.and('contain', 'Successfully Updated')
     cy.get('.oxd-toast-close')
     cy.get(selectorList.genericCombobox).eq(0).click()
     //cy.get(selectorList.secondItemCombobox).click
     cy.get(selectorList.genericCombobox).eq(1).click()
      //cy.get(selectorList.thirdItemCombobox).click

     
  })


it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
     cy.get(selectorList.passwordField).type(userData.userFail.password)
     cy.get(selectorList.loginButton).click() 
     cy.get(selectorList.wrongCredentialAlert)
     
    
  })
})
