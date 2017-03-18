import { BrodetsthlmPage } from './app.po';

describe('brodetsthlm App', function() {
  let page: BrodetsthlmPage;

  beforeEach(() => {
    page = new BrodetsthlmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
