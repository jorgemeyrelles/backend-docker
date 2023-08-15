const express = require('express');

const app = express();

const sequelize = require('./utils/database');
const User = require('./Models/users');

app.use((express.json()));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
  next();
});

app.use('/dev', require('./routes/dev'));
app.use('/users', require('./routes/users'));

async function connect() {
  try {
    await sequelize.sync({ force: false });
    console.log(`Rodando na porta => ${process.env.EXTERNAL_PORT || 3001}`);
    app.listen(process.env.EXTERNAL_PORT || 3001);
  } catch (error) {
    console.error(error);
  }
};

connect();