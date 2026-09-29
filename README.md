# Projeto Cypress - do Zero à Nuvem ☁️

Projeto de automação de testes da plataforma **CAC TAT (Central de Atendimento ao Cliente TAT)** utilizando Cypress.

## Pré-requisitos

É necessário ter o **Node.js** e o **npm** instalados para executar este projeto.

> O projeto foi desenvolvido utilizando **Node.js v24.21.0** e **npm 11.19.0**. Recomenda-se utilizar essas mesmas versões ou versões superiores.


## Instalação

Execute `npm install` (ou `npm i`, na versão abreviada) para instalar as dependências do projeto.

## Testes

Execute `npm test` (ou `npm t`, na versão abreviada) para executar os testes em modo headless.

Para abrir em modo interativo, execute `npm run cy:open`.

Ou para executar os testes simulando um dispositivo mobile, utilize:

`npm run test:mobile`


### Cenários de teste

Os testes automatizados contemplam diferentes funcionalidades da plataforma, incluindo:

* Validação do título da página
* Preenchimento e envio do formulário
* Validação de e-mail com formato inválido
* Validação de campos obrigatórios
* Validação do campo de telefone
* Preenchimento e limpeza de campos
* Utilização de comando customizado
* Seleção de produtos por texto, valor e índice
* Seleção de radio buttons
* Seleção e desmarcação de checkboxes
* Upload de arquivos utilizando fixtures
* Upload de arquivos simulando drag-and-drop
* Utilização de fixtures com alias
* Validação de links e atributos HTML
* Navegação para a página de Política de Privacidade

## Apoie este projeto

Se você gostou do projeto, deixe uma ⭐ no repositório.

---
Este projeto foi desenvolvido por [Arianne Silva](https://github.com/), como parte dos estudos realizados no curso **Cypress do Zero à Nuvem**, produzido pela **Talking About Testing**.

