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


| Dependências | Documentação |
| ------ | ------ |
| react-icons | [https://react-icons.github.io/react-icons/] |
| antd | [https://ant.design/] |
| react-dom | [https://www.npmjs.com/package/react-dom] |
| react-hook-form | [https://react-hook-form.com/] |
| react-input-mask | [https://www.npmjs.com/package/react-input-mask] |
| react-router-dom | [https://www.npmjs.com/package/react-router-dom] |
| styled-components | [https://styled-components.com/] |
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

- [public] - Imagens da aplicação;
- [src] - assets, layout, server, Service;
     1- assets: Components, Context, Pages;
     2- layout: Layout;
     3- server: db.json;
     4- Service: 
          >User/ 
          Consulta.service, 
          Exame.service, 
          Pacinente.service, 
          User.CEP, 
          User.Service e 
          LocalStorage.server;
- [App.jsx] - Pasta com arquivo Rotas
- [Global.Style] - Arquivo de estilização geral do app.
- [main.jsx] - Pasta com a renderização do App encapsulado pelos Providers para o ReactDOM.

Nas pastas os arquivos estão separados conforme a sua função. 


<p>_________________________________________________</p>

<h2>Login, Cadastros e Consultas</h2>

<h3>Login:</h3>

- Utilize os seguindes dados para acessar o sistema:
>E-mail: adm@labmedical.com;
>Senha: 12345678;

<h3>HomePage:</h3>
<p>Consulte os Cards de Estatísticas automatizados e pode pesquisar paciente para ver o card dele.</p>

<h3>Cadastro de Paciente:</h3>
<p>Preencha todos os dados do paciente e clique em salvar</p>


<h3>Cadastro de Consulta:</h3>
<p>Pesquise o paciente pelo NOME e preencha todos os dados da consulta quando o formulário encontrar o paciente no banco de dados e clique em salvar</p>

<h3>Cadastro de Exames:</h3>
<p>Pesquise o paciente pelo E-MAIL e preencha todos os dados do exame quando o formulário encontrar o paciente no banco de dados e clique em salvar</p>

<h3>Prontuarios:</h3>
<p>Pesquise o paciente pelo NOME e receba o cartão resumido dele. Clique na seta para visualizar o Prontuário do Paciente com suas consultas e exames.</p>

<h2>Sugestões e Melhorias:</h2>

- FrontEnd - A API pode receber um FrontEnd para melhorar a usabilidade;
- Rotas - A API pode receber novas rotas e oferecer novas funcionalidades, por exemplo:
     ```sh
Aprimorar o sistema de deleção de dados do banco de dados, pois como está não é possível excluir por não haver uma tela de consulta aprimorada de exames, consultas, principalmente.
     ```
   