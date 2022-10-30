const express = require('express');
const rootRouter = express.Router();
const likeRoute = require('./v1/likeRoute');
const rateRoute = require('./v1/rateRoute');
const userRoute = require('./v1/userRoute');


rootRouter.use('/like/v1', likeRoute);
rootRouter.use('/rate/v1', rateRoute);
rootRouter.use('/user/v1', userRoute);


module.exports = rootRouter;