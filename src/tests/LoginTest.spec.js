import {test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage  } from '../pages/HomePage';

test('login', async({page})=>{

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('amaranenivineela@gmail.com','Varam@98765');
    await login.clickLoginButton();
    await page.waitForTimeout(5000);

    const homePage = new HomePage(page);
    homePage.expectLogoToBeVisable();
    homePage.clickOnPCunderDesktop();
    await page.waitForTimeout(5000);

});