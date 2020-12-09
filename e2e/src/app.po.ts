import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getLayoutContent(): ElementFinder {
    return element(by.css('.layout-content'));
  }

  getDesktopSidebar(): ElementFinder {
    return element(by.css('.layout-sidebar .sidebar'));
  }

  getMobileMenu(): ElementFinder {
    return element(by.css('.layout-content .sidebar'));
  }

  getDynamicHeader(): ElementFinder {
    return element(by.css('#header-dynamic'));
  }

  getDynamicHeaderContainer(): ElementFinder {
    return element(by.css('#header-dynamic > *'));
  }
}
