// server.js

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'mysql',
  database: 'tele_dbms'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected');
});

// Define API routes for login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM personal WHERE email = ? AND password = ?';

  db.query(query, [email, password], (err, result) => {
    if (err) {
      res.status(500).send('Internal Server Error');
      throw err;
    }

    if (result.length > 0) {
      res.status(200).send('Login Successful');
    } else {
      res.status(401).send('Unauthorized');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
