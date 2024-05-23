const mongoose = require('mongoose');
const URI = 'mongodb+srv://restauranteUser:wmeNhxem6gK0NbuH@cluster0.zootlqf.mongodb.net/mesaVip?retryWrites=true&w=majority&appName=Cluster0';

mongoose
    .connect(URI)
    .then(() => console. log('DB is Up!'))
    .catch(() =>console.log(err));
