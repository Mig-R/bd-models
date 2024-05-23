const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restuarante = new Schema({
    cnpj: String,
    dt_inaugural: Date,
    nome: String,
    ddd: String,
    telefone: String,
    email: String,
    sobre: String,

    cep:{ 
        cidade: String,
        uf: String,
        logradouro: String,
        nr_logradouro: String,
        bairro: String,
        complemento: String,    
    },
    
    dia_funcionamento1: String,
    dia_funcionamento2: String,
    horario_funcionamento1: Date,
    horario_funcionamento2: Date,
    servicos_id: Number,
    categoria_id: Number

});

module.exports = mongoose.model('Restuarante' , restuarante);