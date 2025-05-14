import {test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AccountPage } from '../pages/AccountPage';
import { AddressPage } from '../pages/AddressPage';
import logger from "../utils/LoggerUtil";
import cdata from "../data/Address.json";
import { add } from 'winston';

for(const address of cdata){
  test(`Advance DD test for ${address.fname} `, async ({ page }) => {
    logger.info("Test for Contact Creation is started...");
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('','');
    await login.clickLoginButton();
    await page.waitForTimeout(5000);

    const accountPage = new AccountPage(page);
    accountPage.expectLogoToBeVisable();
    accountPage.clickOnModifyAddress();
    await page.waitForTimeout(5000);
    logger.info("Test for login is completed");

    const addressPage = new AddressPage(page);
    addressPage.clickOnNewAddressButton();
    await page.waitForTimeout(10000);
    addressPage.createNewAddress(address.fname,address.lname,address.company,address.address1,address.address2,address.city,address.postcode,address.country,address.state);
    addressPage.clickOnContinueButton();
})

}