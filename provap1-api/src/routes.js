
const express = require('express');
const routes = express.Router();

const MenuController = require('./controllers/MenuController');
routes.get('/cardapio', MenuController.index);
routes.get('/cardapio/:id', MenuController.show);
routes.post('/cardapio', MenuController.store);
routes.put('/cardapio/:id', MenuController.update);
routes.delete('/cardapio/:id', MenuController.destroy);
routes.get('/cardapio/procurar/:date', MenuController.search);
module.exports = routes;
