const { Router } = require('express');
const express = require('express');
const CollectController = require('./controllers/CollectController')

const routes = express.Router();
routes.post('/collect', CollectController.store);
routes.get('/collectToday', CollectController.indexToday);
routes.get('/collectDate/:date', CollectController.indexDate);
routes.get('/collect', CollectController.index);

module.exports = routes;