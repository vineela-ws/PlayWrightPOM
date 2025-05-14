import { Page,expect} from '@playwright/test';
import logger from "../utils/LoggerUtil";


exports.AddressPage = class AddressPage{

    constructor(page){
    this.page =page;
    this.newAddress = page.locator("//a[normalize-space()='New Address']");
    this.firstName = page.locator('#input-firstname');
    this.lastName = page.locator('#input-lastname');
    this.company  = page.locator('#input-company');
    this.address1 = page.locator('#input-address-1');
    this.address2 = page.locator('#input-address-2');
    this.city     = page.locator('#input-city');
    this.postcode = page.locator('#input-postcode');
    this.country  = page.locator('#input-country');
    this.state  = page.locator('#input-zone');
    this.continueButton = page.locator("//input[@value='Continue']");
    }

   async clickOnNewAddressButton(){
    await this.newAddress.click();
   }

   async createNewAddress(fname,lname,company,Add1,Add2,city,postcode,country,state)
   {
     await this.firstName.fill(fname);
     await this.firstName.press('Tab');
     await this.lastName.fill(lname);
     await this.lastName.press('Tab');
     await this.company.fill(company);
     await this.company.press('Tab');
     await this.address1.fill(Add1);
     await this.address1.press('Tab');
     await this.address2.fill(Add2);
     await this.address2.press('Tab');
     await this.city.fill(city);
     await this.city.press('Tab');
     await this.postcode.fill(postcode);
     await this.postcode.press('Tab');
     await this.country.selectOption(country);
     await this.country.press('Tab');
     await this.state.selectOption(state);
   }

   async clickOnContinueButton(){
    await this.continueButton.click();
   }
    
}