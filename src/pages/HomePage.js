
import { expect } from '@playwright/test';

exports.HomePage = class HomePage{

    constructor(page){
    this.page = page;
    this.logo = page.locator("#logo");
    this.deskTop =page.locator("//a[normalize-space()='Desktops']");
    this.pc = page.locator("//a[normalize-space()='PC (0)']");
    }

    async expectLogoToBeVisable(){
    await expect(this.logo).toBeVisible({timeout:15000});
    }

    async clickOnPCunderDesktop(){
    await this.deskTop.hover();
    await this.pc.click();
    }
    
}