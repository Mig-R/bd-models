const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente =  new Schema({
    nome: String,
    senha: String,
    email: String,
    celular: String,
    ddd: String,
    
});      

module.exports = mongoose.model('Cliente' , cliente);