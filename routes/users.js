const router = require('express').Router();
const UsersController = require('../controller/usersController');

router.post('/vote', UsersController.vote);

module.exports = router;