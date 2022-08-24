const express = require('express');
const router = express.Router();
const {loginCtrl,registerCtrl}= require('../controllers/users');
// login ! 
router.post('/login', loginCtrl);
// Registrar un usuario
router.post('/createuser', registerCtrl);


module.exports = router;