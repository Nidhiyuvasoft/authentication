const express = require('express');
const { register, login } = require('../controllers/AuthControllers');
const router = express.Router();// const { register, login } = require('../controllers/AuthController');

// /auth/register
router.post('/register', register);

// /auth/login
router.post('/login', login);

module.exports = router;
