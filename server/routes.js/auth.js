const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body ,validationResult} = require('express-validator');

router.post('/',[
    body('name').isLength({min: 5}),
    body('email').isEmail(),
    body()
])