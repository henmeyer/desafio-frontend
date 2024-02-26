<h1 align="center">Desafio Frontend</h1>

<p align="center">Desafio básico de Frontend para realizar operações CRUD</p>

<p align="center">
  <a href="#installation">Instalação</a> •
  <a href="#instrucoes">Instruções</a> 
</p>

<h2 id="installation">Instalação</h2>

<h3>Requisitos</h3>

  ⚠️ - [Node.js](https://nodejs.org/en)
  
  ⚠️ - [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

<h3>Rodando o servidor</h3>

<h4>Clone este repositório</h4>

```bash
git clone https://github.com/henmeyer/desafio-frontend.git
```

<h4>Instale as dependências do projeto</h4>

```bash
yarn
```

<h4>Migre os dados para o SQLite</h4>

```bash
yarn prisma migrate dev
```

<h4>Inicie o Servidor</h4>

```bash
yarn start
```

<h2 id="instrucoes">Instruções</h2>

Crie duas páginas que utilizem esta API para gerenciar os dados.

  1. Página em forma de tabela que mostre os dados presentes nesta API e botões para criação/edição/exclusão de dados;
  2. Formulário para criação de novos dados contendo os seguites campos:
     - Nome Completo: Aceita apenas Letras (até 100 caracteres)
     - E-mail: Verifica se é um e-mail válido
    
Diferenciais:
  - Desenvolvimento em React ou Vue.js
  - Design eficiente

<h3>Entrega</h3>
📹 Enviar um vídeo explicando o código

🔼 Subir o código no seu GitHub

<h3>Endpoints</h3>

|HTTP Method|URL|Description|
|---|---|---|
|`POST`|http://localhost:3333/api/users | Cria um novo User |
|`PUT`|http://localhost:3333/api/users/{userId} | Edita um User pelo ID |
|`GET`|http://localhost:3333/api/users/{userId} | Mostra um User pelo ID |
|`DELETE`|http://localhost:3333/api/users/{userId} | Deleta um User pelo ID |
|`GET`|http://localhost:3333/api/users/ | Lista todos os Users |
