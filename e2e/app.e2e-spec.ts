import { NgReactiveFormsPage } from './app.po';

describe('ng-reactive-forms App', () => {
  let page: NgReactiveFormsPage;

  beforeEach(() => {
    page = new NgReactiveFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
