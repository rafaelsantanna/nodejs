Webservice RESTful com Node.js, Restify e MySQL

https://www.youtube.com/playlist?list=PLFJmwzuHdBRTBbkyH0gATtDhj6ikOIkMy


instruções para criar o projeto:

//Criando o arquivo package.json

npm init -y

// restify é o responsável pelas rotas, ele é uma alternativa mais simples ao express

npm i restify eslint --save-dev

// Executa um script com o nome dev, para executar desta maneira foi configurando em "scripts" no arquivo packge.json
// OBS: este script esta sendo responsável por executar o server src/index.js

npm run dev 

// nodemon serve para iniciar o server igual ao comando 'node', porém ele reinicia o server a cada 'save' para não precisar fazer manualmente a cada alteração.
// OBS: Nodemon só utilizamos localmente, quando subir para a VPS utilizaremos outro package.

npm i -g nodemon 

// package responsavel por fazer a conexão com o mysql

npm i mysql --save-dev

Encerrei na aula 22, pois já tinha conhecimento em JWT e deploy