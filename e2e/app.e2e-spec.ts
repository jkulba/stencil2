import { Stencil2Page } from './app.po';

describe('stencil2 App', () => {
  let page: Stencil2Page;

  beforeEach(() => {
    page = new Stencil2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
