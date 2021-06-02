const Ethereum = require('../lib/etherum');
const UserDAO = require('../db/repository/userDao');

const vote = (userDetails) => {
  return new Promise((resolve, reject) => {
    try{
      UserDAO.create(userDetails)
      .then(async (createdUser) => {
        console.log("account balance: ", await Ethereum.getAccountBalance());
        resolve(createdUser);
      })
      .catch(error =>{
        reject(error);
      })
    }catch(error){
      reject(error);
    }
  });
}
vote();

module.exports = {
  vote
}
