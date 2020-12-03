import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getHeaderParallaxBackground(): ElementFinder {
    return element(by.css('header .background'));
  }

  getSidebar(): ElementFinder {
    return element(by.css('#sidebar'));
  }
}
