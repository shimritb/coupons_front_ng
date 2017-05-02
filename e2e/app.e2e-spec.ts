import { FrontNgPage } from './app.po';

describe('front-ng App', () => {
  let page: FrontNgPage;

  beforeEach(() => {
    page = new FrontNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
