describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('src/index.html')
  })
 
  it('Verifica o título da página', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  });

  it('Preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10)

    cy.get('[name="firstName"]').type('Arianne')
    cy.get('[name="lastName"]').type('Silva')
    cy.get(':nth-child(2) > :nth-child(1) > [name="email"]').type('arianne.teste@hotmail.com')
    cy.get('[name="open-text-area"]').type(longText, {delay: 0})
    cy.contains('.button', 'Enviar').click()

    cy.get('.success').should('be.visible')
  })

  it ('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {

    cy.get('[name="firstName"]').type('Arianne')
    cy.get('[name="lastName"]').type('Silva')
    cy.get(':nth-child(2) > :nth-child(1) > [name="email"]').type('123')
    cy.get('[name="open-text-area"]').type('Nenhuma sugestão,obrigada.', {delay: 0})
    cy.contains('.button', 'Enviar').click()

    cy.get('.error').should('be.visible')

  })

  it ('Valida se o campo telefone permanece vazio quando o usuário tenta digitar letras', () => {
    cy.get('input#phone')
      .type('abc')
      .should('have.value', '')
  })

  it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('[name="firstName"]').type('Arianne')
    cy.get('[name="lastName"]').type('Silva')
    cy.get(':nth-child(2) > :nth-child(1) > [name="email"]').type('arianne.teste@hotmail.com')
    cy.get('[name="open-text-area"]').type('Não tenho nenhuma sugestão, obrigada!', {delay: 0})
    cy.get('#phone-checkbox').check()
    cy.contains('.button', 'Enviar').click()
    
     cy.get('.error').should('be.visible')
  })

  it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('[name="firstName"]')
      .type('Arianne')
      .should('have.value','Arianne')
      .clear()
      .should('have.value', '')

    cy.get('[name="lastName"]')
      .type('Silva')
      .should('have.value','Silva')
      .clear()
      .should('have.value', '')

     cy.get(':nth-child(2) > :nth-child(1) > [name="email"]')
      .type('arianne.teste@hotmail.com')
      .should('have.value','arianne.teste@hotmail.com')
      .clear()
      .should('have.value', '')

    cy.get(':nth-child(2) > [name="phone"]')
      .type('99999999', {delay: 0})
      .should('have.value','99999999')
      .clear()
      .should('have.value', '')
  })

  it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios.', () => {
    cy.contains('.button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })

  it('Envia o formuário com sucesso usando um comando customizado', () => {
    const data = {
      firstName:'Joao',
      lastName:'Silva',
      email:'joao@teste.com',
      text:'Teste'
    }

    cy.fillMandatoryFieldsAndSubmit(data)

    cy.get('.success').should('be.visible')
  })

it('Seleciona um produto (YouTube) por seu texto', () => {
  cy.get('#product').select('YouTube')
    .should('have.value','youtube')
})

it('Seleciona um produto (Mentoria) por seu valor (value)', () => {
  cy.get('#product').select('mentoria')
    .should('have.value','mentoria')
})

it('Seleciona um produto (Blog) por seu índice', () => {
  cy.get('#product').select(1)
    .should('have.value','blog')
})

it('Marca o tipo de atendimento "Feedback"', () => {
  cy.get('input[name="atendimento-tat"][value="feedback"]')
    .check()
    .should('be.checked')
    .and('have.value', 'feedback')
})

it('Marca cada tipo de atendimento', () => {
  cy.get('input[type="radio"]')
    .each(typeOfService => {
      cy.wrap(typeOfService)
        .check()
        .should('be.checked')
    })
})

it('Marca ambos checkboxes, depois desmarca o último', () => {
  cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')
})

it('Seleciona um arquivo da pasta fixtures', () => {
  cy.get('#file-upload')
    .selectFile('cypress/fixtures/example.json')
    .should(input => {
      expect(input[0].files[0].name).to.equal('example.json')
    })
})

it('Seleciona um arquivo simulando um drag-and-drop', () => {
  cy.get('#file-upload')
    .selectFile('cypress/fixtures/example.json', { action: 'drag-drop'})
    .should(input => {
      expect(input[0].files[0].name).to.equal('example.json')
    })
})

it('Seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
  cy.fixture('example.json').as('sampleFile')
  cy.get('#file-upload')
    .selectFile('@sampleFile')
    .should(input => {
      expect(input[0].files[0].name).to.equal('example.json')
    })
})

it('Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
  cy.contains('a','Política de Privacidade')
    .should('have.attr', 'href', 'privacy.html')
    .and('have.attr', 'target', '_blank')
})

it('Acessa a página da política de privacidade removendo o target e então clicando no link', () => {
   cy.contains('a','Política de Privacidade')
    .invoke('removeAttr', 'target')
    .click()
    
  cy.contains('h1','CAC TAT - Política de Privacidade')
    .should('be.visible')
})















})