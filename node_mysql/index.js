const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);


router.get('/clientes/:id?', (req, res) =>{
  let filter = '';
  if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
  execSQLQuery('SELECT * FROM Clientes' + filter, res);
})

router.delete('/clientes/:id', (req, res) =>{
  execSQLQuery('DELETE FROM Clientes WHERE ID=' + parseInt(req.params.id), res);
})

router.post('/clientes', (req, res) =>{
  const nome = req.body.nome.substring(0,150);
  const cpf = req.body.cpf.substring(0,11);
  execSQLQuery(`INSERT INTO Clientes(Nome, CPF) VALUES('${nome}','${cpf}')`, res);
});

router.patch('/clientes/:id', (req, res) =>{
  const id = parseInt(req.params.id);
  const nome = req.body.nome.substring(0,150);
  const cpf = req.body.cpf.substring(0,11);
  execSQLQuery(`UPDATE Clientes SET Nome='${nome}', CPF='${cpf}' WHERE ID=${id}`, res);
})

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : '',
    database : 'node_mysql'
  });

  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}