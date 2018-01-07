Webservice RESTful com Node.js, Restify e MySQ

https://www.youtube.com/playlist?list=PLFJmwzuHdBRTBbkyH0gATtDhj6ikOIkMy


instruções para criar o projeto:

npm init -y

npm i restify eslint --save-dev (O restify é o responsável pelas rotas, ele é uma alternativa mais simples ao express)

npm run dev (executa um scrit com o nome dev, para executar desta maneira foi configurando em "scripts" no arquivo packge.json)
OBS: este script esta sendo responsável po executar o server e mais alguns comandos

npm i -g nodemon (nodemon serve para iniciar o server igual ao comando 'node', porém ele reinicia o server a cada save para não precisar fazer manualmente a cada alteração.) OBS: Nodemon só utilizamos localmente, quando subir para o server utilizaremos outro package