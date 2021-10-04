describe('FAQ', () => {
  before(() => {
    cy.visit('user/admin-events');
  })

  it('new nav link for events', () => {
    cy.get('.dropdown > .nav-link').click();
    cy.get('[data-cy=event-nav-link]').click();
    cy.url().should('eq', 'http://localhost:4200/user/admin-events')
  })

  it.skip('add new event', () => {
    cy.get('[data-cy=add-new-event]').click();
    cy.get('[data-cy=title-modal]').type("Title");
    cy.get('[data-cy=content-modal]').type("Content")
    cy.get('[data-cy=date-modal]').click();
    cy.get('.picker__button--today').click();
    cy.get('.picker__button--close').click();
    cy.get('[data-cy=event-submit-btn]').click();
    cy.wait(2000);

    cy.get('.md-toast-top-right > .md-toast-warning > .md-toast-message')
      .should('contain', 'Успешно сте направили нови догађај');
  });

  it('add new event without content', () => {
    cy.get('[data-cy=add-new-event]').click();
    cy.get('[data-cy=title-modal]').type("Title");
    cy.get('[data-cy=date-modal]').click();
    cy.get('.picker__button--today').click();
    cy.get('.picker__button--close').click();
    cy.get('[data-cy=event-submit-btn]').click();

    cy.get('.md-toast-top-right > .md-toast-warning > .md-toast-message')
      .should('contain', 'Проверите да ли сте попунили обавезна поља')

    cy.get('#frameModalTop > .modal-dialog > .modal-content > .modal-header > .close').click();
  });

  //////////////// EDIT

  it('edit new event', () => {
    cy.get('[data-cy=edit-btn]').first().click();
    cy.get('[data-cy=title-modal]').type(" edited");
    cy.get('[data-cy=event-submit-btn]').click({force: true});
    cy.wait(2000);

    cy.get('.md-toast-top-right > .md-toast-success > .md-toast-message')
      .should('contain', 'Успешно сте изменили догађај')
    cy.get('[data-cy=title]').first().should('contain', 'edited')
  });

  it('empty fields - edit new event', () => {
    cy.get('[data-cy=edit-btn]').first().click();
    cy.get('[data-cy=title-modal]').clear();
    cy.get('[data-cy=event-submit-btn]').click();

    cy.get('.md-toast-top-right > .md-toast-warning > .md-toast-message')
      .should('contain', 'Проверите да ли сте попунили обавезна поља')

    cy.get('[data-cy=title-modal]').type('New title');
    cy.get('[data-cy=content-modal]').clear();
    cy.get('[data-cy=event-submit-btn]').click();

    cy.get('.md-toast-top-right > .md-toast-warning > .md-toast-message')
      .should('contain', 'Проверите да ли сте попунили обавезна поља')

    cy.get('#frameModalTop > .modal-dialog > .modal-content > .modal-header > .close').click();
  });
});
