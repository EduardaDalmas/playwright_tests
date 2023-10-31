import { test } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { MainPage } from '../pages/main';

test('Login e Logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);

  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce');
  await mainPage.usuarioLogado();
  await mainPage.deslogar();
  await loginPage.usuarioDeslogado();
});