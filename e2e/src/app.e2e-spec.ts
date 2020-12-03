import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should be header with parallax', () => {
    expect(page.getHeaderParallaxBackground().getCssValue('top')).toEqual('0px');
    browser.sleep(1000);
    browser.executeScript('document.querySelector(".layout-content").scrollTop += 10;').then(() => {
      browser.sleep(1000);
      expect(page.getHeaderParallaxBackground().getCssValue('top')).not.toBe('0px');
    });
  });

  it('should open sidebar on hover', () => {
    const sidebar = page.getSidebar();
    const sidebarWidthBefore = sidebar.getCssValue('width');

    browser.actions().mouseMove(sidebar).perform();
    browser.sleep(1000);

    const sidebarWidthAfter = sidebar.getCssValue('width');

    expect(sidebarWidthAfter !== sidebarWidthBefore).toBeTruthy();

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
