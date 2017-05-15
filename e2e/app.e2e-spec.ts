import { FixMyGrammarClientPage } from './app.po';

describe('fix-my-grammar-client App', () => {
  let page: FixMyGrammarClientPage;

  beforeEach(() => {
    page = new FixMyGrammarClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
