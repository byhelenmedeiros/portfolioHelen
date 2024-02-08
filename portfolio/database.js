const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // Endereço do servidor MySQL
  user: 'admin', // Nome de usuário do MySQL
  password: 'Helen@2019', // Senha do MySQL
  database: 'portfolio_db' // Nome do banco de dados
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conexão ao MySQL bem-sucedida');
  }
});

module.exports = connection;
