<h1>LAB Medical System</h1>
<h3>Sistema de Gerenciamento de Clínicas, Hospitais e Postos de Saúde para a gestão de Pacientes, Consultas, Exames e Prontuários.</h3>

<h2>Contexto:</h2>

<p>A LAB Medical System executa o gerenciamento dos cadastros de Pacientes, Consultas, Exames e Prontuários, incluíndo e pesquisando as informações no banco de dados. </p>
<p>A LAB Medical System fornece os dados em tempo real do número de pacientes, consultas e exames.</p>
<p>_________________________________________________</p>
<!-- <p>The Medical System Lab manages the records of doctors, nurses and patients by inserting, searching and changing the database. </p>
<p>The Medical System API provides physicians' attendance record and patient status update when attended.</p>
<p>_________________________________________________</p> -->


<h2>Tecs:</h2>

| Linguagem | Documentação |
| ------ | ------ |
| JavaScript | [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript] |


| Framework / Plugins | Documentação |
| ------ | ------ |
| React | [https://react.dev/] |
| ReactBootstrap | [https://react-bootstrap.netlify.app/] |
| Node.JS | [https://nodejs.org/en] |
| Json.Server | [https://www.npmjs.com/package/json-server] |
| Vite | [https://vitejs.dev/] |
<p>_________________________________________________</p>


<h2>Instalação/Installation </h2>

Para iniciar o aplicativo começamos pelo [Node.js] v8+ usando os comandos abaixo para a instalação das dependências e iniciar o servidor.


```sh
cd LABMedical/user-caps
npm i
npm npm run dev
npm json-server --watch src/server/db.json
```


<p>_________________________________________________</p>

<h2>Padrões Utilizados</h2>

A Arquitetura do Projeto está bastante granulada, tendo os componentes individualizados e as pastas organizadas de acordo com o contexto. Veja como está idealizado:

- [src] - Pastas Controllers, Models e Database;
- [database] - Pasta com arquivo com a inicialização da rota Sequilize;
- [models] - Arquivos de criação de tabelas no banco de dados;
- [controllers] - Pastas com os arquivos das requisições da aplicação. Constam as pastas patients, doctors, nurses e service;

Nas pastas os arquivos estão separados conforme a sua função. 

A pasta [index.js] que consta no arquivo raiz é o início do projeto, faz a ligação do banco de dados e nele contém as rotas das requisições. 
<p>_________________________________________________</p>

<h2>Requisições, Descrição e Path</h2>

<p>A aplicação consta com 3 sessões de requisições, sendo elas, Patient, Doctor, Nurse. Abaixo você confere as informações principais para a utilização das requisições, suas funções e path's:</p>



<h2>Sugestões e Melhorias:</h2>

- FrontEnd - A API pode receber um FrontEnd para melhorar a usabilidade;
- Rotas - A API pode receber novas rotas e oferecer novas funcionalidades, por exemplo:
     ```sh
     + Rotas para listar pacientes atendidos por determinado Médico;
     ```
    ```sh
     + Inclusão de contagem de atendimento para Nurses;
     ```
     ```sh
     + Criação de attendence para Nurses;
     ```
     ```sh
     + Sistema de login para os usuários do sistema;
     ```
- Models - As especificações de cada model podem ser aprimoradas;
- ...