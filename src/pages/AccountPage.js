
import { expect } from '@playwright/test';
import logger from "../utils/LoggerUtil";


exports.AccountPage = class AccountPage{

    constructor(page){
    this.page = page;
    this.logo = page.locator("#logo");
    this.deskTop =page.locator("//a[normalize-space()='Desktops']");
    this.pc = page.locator("//a[normalize-space()='PC (0)']");
    this.address = page.locator("//a[normalize-space()='Modify your address book entries']");
    }

    async expectLogoToBeVisable(){
    await expect(this.logo).toBeVisible({timeout:15000});
    }

    async clickOnPCunderDesktop(){
    await this.deskTop.hover();
    await this.pc.click();
    }

    async clickOnModifyAddress(){
     await this.address.click();
    }
    
}