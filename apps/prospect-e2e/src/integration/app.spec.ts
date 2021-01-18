import { getStarButton } from '../support/app.po';

describe('StarButton', () => {
  beforeEach(() => cy.visit('/'));

  it('should display github star button', () => {
    getStarButton().should((t) => t);
  });
});
