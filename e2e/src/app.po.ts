import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  // сделать тест параллакса
  getHeaderParallaxBackground(): ElementFinder {
    return element(by.css('header .background'));
  }
}
