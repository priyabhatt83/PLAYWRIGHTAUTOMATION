import { test, expect } from '../../fixtures/loginFixture';
import { loginData } from '../../testData/index';

test('Login test', async ({ pages }) => {
  await pages.loginPage.login(loginData.validCredentials.username, loginData.validCredentials.password);
  await pages.loginPage.isLoginSuccessful();
});