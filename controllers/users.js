const path = require('path');
const getDataFromFile = require('../helpers/files.js');

const dataPath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => getDataFromFile(dataPath)
  .then((users) => {
    if (users === undefined) {
      return res.status(404).send({ message: 'Файл не найден' });
    }
    return res.status(200).send(users);
  })
  .catch(() => res.status(500).send({ message: 'Ошибка сервера' }));

const getProfile = (req, res) => getDataFromFile(dataPath)
  .then((users) => users.find((user) => user._id === req.params._id))
  .then((user) => {
    if (!user) {
      return res.status(404).send({ message: 'Нет пользователя с таким id' });
    }

    return res.status(200).send(user);
  })
  .catch(() => res.status(500).send({ message: 'Ошибка сервера' }));

module.exports = { getUsers, getProfile };
