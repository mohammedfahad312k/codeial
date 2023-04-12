const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');

router.get('/profile', userController.profile);
router.get('/signIn', userController.signIn);
router.get('/signUp' , userController.signUp);
router.post('/create', userController.create);
router.post('/createSession', userController.createSession);
router.post('/signOut', userController.signOut);

module.exports = router;