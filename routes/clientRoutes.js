const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// Rota para exibir o formulário de cadastro
router.get('/', (req, res) => {
    res.render('index');
});

// Rota para cadastrar um novo cliente
router.post('/add-client', async (req, res) => {
    const { name, phone } = req.body;
    const client = new Client({ name, phone });
    await client.save();
    res.redirect('/');
});

// Rota para exibir todos os clientes
router.get('/clients', async (req, res) => {
    const clients = await Client.find();
    res.render('clients', { clients });
});

// Rota para atualizar a data de último pedido
router.post('/update-order/:id', async (req, res) => {
    const clientId = req.params.id;
    await Client.findByIdAndUpdate(clientId, { lastOrderDate: Date.now() });
    res.redirect('/clients');
});

module.exports = router;
