import { DpaaSBillingPage } from './app.po';

describe('dpaa-s-billing App', function() {
  let page: DpaaSBillingPage;

  beforeEach(() => {
    page = new DpaaSBillingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
