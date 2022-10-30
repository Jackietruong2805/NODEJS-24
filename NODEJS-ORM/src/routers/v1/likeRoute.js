const express = require('express');
const likeRoute = express.Router();
const {addLike, getLike, removeLike} = require('../../controllers/likeController');

likeRoute.get('/getLike', getLike)
likeRoute.post('/createLike', addLike);
likeRoute.delete('/removeLike', removeLike);

module.exports = likeRoute;