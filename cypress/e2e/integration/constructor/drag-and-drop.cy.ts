describe('drag and drop works correctly', function () {
  const dataTransfer = new DataTransfer()

  function dndIt(dragElement: Cypress.Chainable, dropPlce: Cypress.Chainable) {
    dragElement.trigger('dragstart', { dataTransfer })

    dropPlce.trigger('drop', {
      dataTransfer,
    })

    dragElement.trigger('dragend')
  }

  before(function () {
    cy.visit('http://localhost:3000')
  })

  it('should drag and drop an item from source to destination', function () {
    cy.get('a').contains('Краторная булка N-200i').first().as('dragElement')
    cy.get('a').contains('Соус Spicy-X').first().as('dragElement2')
    cy.get('[data-e2e-id="constructor-destination"]').first().as('dropPlace')

    cy.get('@dragElement').should('exist')
    cy.get('@dragElement2').should('exist')

    // Открытие и закрытие модалки
    cy.get('@dragElement').click()
    cy.get('span').contains('Детали ингредиента').should('exist')
    cy.get('span').contains('Краторная булка N-200i').should('exist')
    cy.get('[data-e2e-id="close-modal"] svg').click()

    // Перетаскиваем элемент в целевую область
    dndIt(cy.get('@dragElement'), cy.get('@dropPlace'))

    cy.get('@dropPlace').contains('Краторная булка N-200i').should('exist')

    // Перетаскиваем второй элемент в целевую область
    dndIt(cy.get('@dragElement2'), cy.get('@dropPlace'))
    cy.get('@dropPlace').contains('Соус Spicy-X').should('exist')

    // Нажимаем кнопку оформить заказ
    cy.get('button').contains('Оформить заказ').first().as('placeOrder')
    cy.get('@placeOrder').click()

    // Логинизация
    cy.get('[data-e2e-id="email-input"]').first().as('emailInput')
    cy.get('@emailInput').type('trisinanton879@gmail.com')
    cy.get('[data-e2e-id="password-input"]').first().as('passwordInput')
    cy.get('@passwordInput').type('Qwerty123')

    cy.get('button').contains('Войти').first().as('signIn')
    cy.get('@signIn').click()

    // Оформить заказ
    cy.get('@placeOrder').click()
    cy.get('span').contains('Ваш заказ начали готовить').should('exist')
  })
})

export {}
