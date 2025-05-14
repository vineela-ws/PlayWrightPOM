import {test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AccountPage } from '../pages/AccountPage';
import logger from "../utils/LoggerUtil";


test('login', async({page})=>{

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    //await login.login(process.env.userId,process.env.password);
    await login.login('','');
    await login.clickLoginButton();
    await page.waitForTimeout(5000);

    const accountPage = new AccountPage(page);
    accountPage.expectLogoToBeVisable();
    //accountPage.clickOnPCunderDesktop();
    accountPage.clickOnModifyAddress();
    await page.waitForTimeout(5000);
    logger.info("Test for login is completed");

});