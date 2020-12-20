const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    validate: {
      validator(v) {
        const regex = /^(https?:\/\/)(\w|\.|\/){1,}(\w|\.|\/|#|-)*$/;
        return regex.test(v);
      },
      message: 'Невалидная ссылка',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
