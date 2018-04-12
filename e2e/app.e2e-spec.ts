import { AngularPlayBookPage } from './app.po';

describe('angular-play-book App', () => {
  let page: AngularPlayBookPage;

  beforeEach(() => {
    page = new AngularPlayBookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
