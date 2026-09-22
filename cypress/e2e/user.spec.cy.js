import userData from '../fixtures/user-data.json'
import LoginPage from './pages/loginPage' 
import DashboardPage from './pages/dashboardPage'
import MenuPage from './pages/menuPages'
import MyInfoPage from './pages/myInfoPages'

const Chance = require('chance')


const chance = new Chance ()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPages = new MyInfoPage()



describe('Orange HRM Tests', () => {

  const selectorList = {

    
  }
  
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage ()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()
    
    myInfoPages.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myInfoPages.fillEmployeeDetails('EmployId', 'otherId', '2010-02-15', '2014-05-17',  '123456', )
    //myInfoPages.fillStatus()
    myInfoPages.saveForm()
    
  })

})
