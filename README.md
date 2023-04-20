<p align="center">
  <img src="https://user-images.githubusercontent.com/94487469/233429384-8b5dffa2-fbe3-404c-ab0a-70905de54f7a.png">
</p>

Olá, seja bem vindo ao repositório do projeto Trybe Futebol Clube! Aqui você irá aprender como instalar e testar esse projeto na sua máquina.

O TFC é um site informativo sobre partidas e classificações de futebol! Contudo, eu desenvolvi apenas a API na qual o site consome. A API retorna para o front-end informações como os dados para formar a classificação do campeonato, login, filtros por partida em andamento ou finalizadas e algumas outras funções. Esse projeto é uma aplicação full-stack, convido você a testar e ver os códigos fontes seguindo os passos a baixo.


## Como usar :computer: :rocket: 

Basta baixar ou clonar esse repositório e seguir todos os passos abaixo.

### Requisitos :clipboard: 

Esse projeto requer que você tenha o node e docker instalado na sua máquina, pois o banco de dados MySQL roda em um container que é executado rodando o docker-compose. Contudo, se você tiver o MySQL instalado na sua máquina, basta configurar um arquivo `.env` com as credenciais do banco.

### Instalação :wrench:
#### Com docker:

- Rode o serviço `node` e `db` com o comando `npm run compose:up` na raiz do projeto.

- Instale as dependências com `npm install` na raiz do projeto.

#### Sem docker:

- Instale as dependências com `npm install` na raiz do projeto.

Para rodar o projeto desta forma, obrigatoriamente você deve ter o node e o MySQL instalado em seu computador.

### Configuração :gear:

Depois de instalar as dependências, você vai precisar criar o banco de dados na qual a API vai consumir. Isso é bem simples porque utilizando o sequelize, com apenas um comando, todo o banco é criado o populado.

- Caso você não tenha optado por usar o docker, você precisa ter o MySQL instalado na sua máquina, caso contrário, o container já está configurado.

- Entre na pasta `back-end` e execute o comando `npm run prestart`.

Esse é um comando predefinido com scripts do sequelize, caso sinta curiosidade a mais, você pode consultar o `package.json` do projeto.

Depois do banco criado e populado, você precisa rodar o comando `npm run start` para deixar o server online e o front-end conseguir fazer requisições. 


### Execução :runner:

Agora basta voltar a pasta raiz do projeto e entrar em `front-end` e executar o comando `npm start` para executar a aplicação React.

## Contato :telephone_receiver:

Caso você tenha alguma dúvida sobre esse projeto ou queira da um feedback você encontra minha redes sociais no meu portifólio clicando [aqui](https://felupee.github.io/#contact).
