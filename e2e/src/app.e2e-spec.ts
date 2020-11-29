import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be header with parallax', () => {
    page.navigateTo();
    expect(page.getHeaderParallaxBackground().getCssValue('top')).toEqual('0px');

    browser.executeScript('window.scrollTo(0,10);').then(() => {
      browser.sleep(1000);
      expect(page.getHeaderParallaxBackground().getCssValue('top')).not.toBe('0px');
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
