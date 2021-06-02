const User = require('../model/user');

const create = (dataObject) => {
  return new Promise((resolve, reject) => {
    try{
      const newUser = new User(dataObject);
      resolve(newUser.save)
    }catch(error){
      reject(error)
    }
  })
}

module.exports = {
  create,
}