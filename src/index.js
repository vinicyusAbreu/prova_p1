const express = require('express');

const app = express();

const routes = require('./routes');

const connectDB = require('../config/db');

connectDB();

app.use(express.json());
app.use(routes)


app.listen(3000, () => {      
  console.log('Estou Funcionando');
});
