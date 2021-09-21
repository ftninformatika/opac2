describe('FAQ', () => {
  before(() => {
    cy.visit('user/admin-faq');
  })

  it('new nav link for FAQ', () => {
    cy.get('.dropdown > .nav-link').click();
    cy.get('[data-cy=faq-nav-link]').click();
    cy.url().should('eq', 'http://localhost:4200/user/admin-faq')
  })

  it('add new FAQ', () => {
    cy.get('[data-cy=new-event]').click();
    cy.get('[data-cy=question]').type("Test question", {force: true})
    cy.get('[data-cy=answer]').type("Test answer", {force: true})
    cy.get('[data-cy=save-faq-btn]').click();
    cy.wait(2000);

    cy.get('[data-cy=card-text] > p').last().should('contain', 'Test answer');
    cy.contains('.md-toast-success', 'Успешно сте додали ново питање и одговор')
  });

  it('edit FAQ', () => {
    cy.get('[data-cy=edit-btn]').last().click();
    cy.get('[data-cy=question]').type(" edited", {force: true});
    cy.get('[data-cy=answer]').type(" edited", {force: true});
    cy.get('[data-cy=save-faq-btn]').click();

    cy.contains('.md-toast-success', 'Успешно сте изменили питање')
    cy.get('[data-cy=card-text] > p').last().should('contain', 'Test answer edited');
  });

  it('delete FAQ', () => {
    cy.get('[data-cy=delete-btn]').last().click();
    cy.get('[data-cy=delete-close-btn]').click();
    cy.get('[data-cy=card-text] > p').last().should('contain', 'Test answer edited');

    cy.get('[data-cy=delete-btn]').last().click();
    cy.get('[data-cy=delete-submit-btn]').click();

    cy.contains('.md-toast-success', 'Успешно сте обрисали питање');
    cy.get('[data-cy=card-text] > p').last().should('not.contain', 'Test answer edited');
  });
});
