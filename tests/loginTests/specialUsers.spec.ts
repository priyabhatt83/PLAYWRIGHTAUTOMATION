
import { test, expect } from '../../fixtures/loginFixture';
import { loginData } from '../../testData/index';

test.describe('Special Users Login Tests', () => {
  
  test('Problem User Login Test', async ({ pages }) => {
    await pages.loginPage.login(loginData.problemUser.username, loginData.problemUser.password);
    await pages.loginPage.isLoginSuccessful();
  });

  test('Performance Glitch User Login Test', async ({ pages }) => {
    await pages.loginPage.login(loginData.performanceGlitchUser.username, loginData.performanceGlitchUser.password);
    await pages.loginPage.isLoginSuccessful();
  });

  test('Locked Out User Login Test - Should Display Error Message', async ({ pages }) => {
    await pages.loginPage.login(loginData.lockedOutUser.username, loginData.lockedOutUser.password);
    
    const errorMessage = await pages.loginPage.getErrorMessage();
    expect(errorMessage).toContain(loginData.lockedOutUser.errorMessage);
  });

  test('Error User Login Test', async ({ pages }) => {
    await pages.loginPage.login(loginData.error_user.username, loginData.error_user.password);
    await pages.loginPage.isLoginSuccessful();
  });

  test('Virtual User Login Test', async ({ pages }) => {
    await pages.loginPage.login(loginData.virtualUser.username, loginData.virtualUser.password);
    
    const errorMessage = await pages.loginPage.getErrorMessage();
    expect(errorMessage).toBeTruthy();
  });
});


