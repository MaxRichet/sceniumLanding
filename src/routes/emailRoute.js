const express = require('express');
const router = express.Router();

const emailController = require('../controllers/emailController');

    router
        .route('/sendemail')
        .post(emailController.emailRegister);

module.exports = router;