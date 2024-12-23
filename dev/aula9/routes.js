const express = require("express");
const route = express.Router();
const homeController = require('./controllers/homeController');
const agendamentoController = require('./controllers/agendamentoController');

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

route.get('/agendamento', agendamentoController.paginaInicial);


module.exports = route;