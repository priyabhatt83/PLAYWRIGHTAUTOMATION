import { test, expect } from '../../fixtures/loginFixture';
import { loginData } from '../../testData/index';

test.describe('Negative Login Tests', () => {
  
  test('Invalid Credentials - Both Username and Password Wrong', async ({ pages }) => {
    await pages.loginPage.login(loginData.invalidCredentials.username, loginData.invalidCredentials.password);
    
    const errorMessage = await pages.loginPage.getErrorMessage();
    expect(errorMessage).toContain(loginData.invalidCredentials.errorMessage);
  });

  test('Invalid Username - Wrong Username with Correct Password', async ({ pages }) => {
    await pages.loginPage.login(loginData.invalidUsername.username, loginData.invalidUsername.password);
    
    const errorMessage = await pages.loginPage.getErrorMessage();
    expect(errorMessage).toContain(loginData.invalidUsername.errorMessage);
  });

  test('Invalid Password - Correct Username with Wrong Password', async ({ pages }) => {
    await pages.loginPage.login(loginData.invalidPassword.username, loginData.invalidPassword.password);
    
    const errorMessage = await pages.loginPage.getErrorMessage();
    expect(errorMessage).toContain(loginData.invalidPassword.errorMessage);
  });

  test('Empty Credentials - Both Username and Password Empty', async ({ pages }) => {
    await pages.loginPage.login(loginData.emptyCredentials.username, loginData.emptyCredentials.password);
    
    const errorMessage = await pages.loginPage.getErrorMessage();
    expect(errorMessage).toContain(loginData.emptyCredentials.errorMessage);
  });

  test('Empty Username - Only Username Empty', async ({ pages }) => {
    await pages.loginPage.login(loginData.emptyUsername.username, loginData.emptyUsername.password);
    
    const errorMessage = await pages.loginPage.getErrorMessage();
    expect(errorMessage).toContain(loginData.emptyUsername.errorMessage);
  });

  test('Empty Password - Only Password Empty', async ({ pages }) => {
    await pages.loginPage.login(loginData.emptyPassword.username, loginData.emptyPassword.password);
    
    const errorMessage = await pages.loginPage.getErrorMessage();
    expect(errorMessage).toContain(loginData.emptyPassword.errorMessage);
  });

  test('Special Characters - XSS and SQL Injection Attempts', async ({ pages }) => {
    await pages.loginPage.login(loginData.specialCharacters.username, loginData.specialCharacters.password);
    
    const errorMessage = await pages.loginPage.getErrorMessage();
    expect(errorMessage).toContain(loginData.specialCharacters.errorMessage);
  });
});
