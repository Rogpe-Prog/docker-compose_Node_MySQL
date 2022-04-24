const express = require ('express')
const app = express()
const port = 3000

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'db',
    database: 'nodedb',
    user: 'root',
    password: 'root'
})

connection.connect((err) => {
    if (err) {
      console.log("Error occurred", err);
    } else {
      console.log("Connected to MySQL Server");
      const sql = `INSERT INTO people(name) values ('Rogpe')`
      connection.query(sql)
    }
});

// connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Aloh@</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta '+ port)
})