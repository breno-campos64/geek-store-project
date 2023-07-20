// conexao
// responsável por estabelecer a conexão com o banco de dados MySQL

const mysql = require('mysql2');

const conexao = mysql.createConnection({  
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345', // troque a senha se necessário
    database: 'lojageek' 
})

module.exports = conexao;