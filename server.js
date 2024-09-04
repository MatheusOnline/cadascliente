const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Conexão com MongoDB
mongoose.connect(`mongodb+srv://mfrancisco20021:MIfCLTDl0ZaFCh5i@cluster0.dgyt8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Definindo a view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rotas
app.use('/', require('./routes/clientRoutes'));


// Iniciando o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
