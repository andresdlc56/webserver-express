const express = require('express');
const app = express();

const hbs = require('hbs');

//hbs helpers
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Andrés',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/data', (req, res) => {
    res.send('Hola Mundo');
});

app.listen(port, () => {
    console.log(`Escuchando Peticiones en el puerto ${ port }`);
});