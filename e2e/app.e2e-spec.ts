import { DildoPage } from './app.po';

describe('dildo App', () => {
  let page: DildoPage;

  beforeEach(() => {
    page = new DildoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
