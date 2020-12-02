const path = require('path');
const getDataFromFile = require('../helpers/files.js');

const dataPath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => getDataFromFile(dataPath)
  .then((cards) => {
    if (cards === undefined) {
      return res.status(404).send({ message: 'Файл не найден' });
    }
    return res.status(200).send(cards);
  })
  .catch(() => res.status(500).send({ message: 'Ошибка сервера' }));

module.exports = getCards;
