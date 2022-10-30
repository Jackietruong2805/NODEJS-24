const express = require('express');
const rateRoute = express.Router();
const {getRate, addRate} =  require('../../controllers/rateController');

rateRoute.get("/getRate", getRate);
rateRoute.post("/addRate", addRate);

module.exports = rateRoute;