
import logger from "../utils/LoggerUtil";

exports.LoginPage = class LoginPage{

    constructor(page){
    this.page = page;
    this.userName = page.locator("#input-email");
    this.PassWord = page.locator("#input-password");
    this.loginButton = page.locator("//input[@type='submit']");
    }

  async gotoLoginPage(){
    await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  }

  async login(username,PassWord){
    await this.userName.fill(username);
    await this.PassWord.fill(PassWord);
  }

  async clickLoginButton(){
    await this.loginButton.click();     
    logger.info("Clicked login button");
  }

}