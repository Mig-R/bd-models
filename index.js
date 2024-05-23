const express = require('express');
const app = express();
const morgan = require('morgan');
require('./database')

//determina para o morgan ser usado apenas em ambiente dev
app.use(morgan('dev'));

app.set('port' , 8000);
app.use(express.json());

app.use('/cardapio' , require('./src/routes/cardapio.routes'))

app.listen(app.get('port') , () => {
    console.log(`WS Escutando na porta ${app.get('port')}`);
});