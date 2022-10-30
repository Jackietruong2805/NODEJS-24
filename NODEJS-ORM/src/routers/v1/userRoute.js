const express = require('express');
const userRoute = express.Router();
const {addOrder} = require('../../controllers/userController');

userRoute.post('/addOrder', addOrder)

module.exports = userRoute;