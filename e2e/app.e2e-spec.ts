import { DigitalLibraryPage } from './app.po';

describe('digital-library App', () => {
  let page: DigitalLibraryPage;

  beforeEach(() => {
    page = new DigitalLibraryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
