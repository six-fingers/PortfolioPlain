import { Seidita.Co.UkPage } from './app.po';

describe('seidita.co.uk App', () => {
  let page: Seidita.Co.UkPage;

  beforeEach(() => {
    page = new Seidita.Co.UkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
