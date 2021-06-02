const bcrypt = require('bcrypt');
const constants = require('../constants/appConstants');

const hashSensitiveText = (plainText) => {
  return bcrypt.hashSync(plainText, constants.SALT);
}

const checkSensitiveText = (plainText, hashedText) => {
  return bcrypt.compareSync(plainText, hashedText);
};

module.exports = {
  hashSensitiveText,
  checkSensitiveText,
}