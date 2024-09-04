const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: String,
    phone: String,
    lastOrderDate: { type: Date, default: Date.now }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
