const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');

const PORT = 3000;

app.use((req, res, next) => {
  req.user = {
    _id: '5fdc9d8a5a41140c19ede408',
  };

  next();
});

app.use('/', usersRouter);
app.use('/', cardsRouter);
app.get('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
