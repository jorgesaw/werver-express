const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err) {});



app.get('/', (req, res) => {
    // res.send('Hello World')

    // let salida = {
    //     nombre: 'Jorge',
    //     edad: 38,
    //     url: req.url
    // };

    // res.send(salida)

    res.render('home', {
        name: 'jorge adrián gonzalez'
    });
})

app.get('/about', (req, res) => {

    res.render('about');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})