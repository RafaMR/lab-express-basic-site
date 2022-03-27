const express = require ('express');
const hbs = require ('hbs');

const app = express();

app.set('view engine', 'hbs');

app.set('views', __dirname + '/views');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));



app.get('/', (request, response) => {
    response.render('home', {
            name: "Julio",
            lastName: "Iglesias",
            age: {
                year: 1961,
                month: 08,
            },
            albums: ["El Amor", "Julio", "Romantic Classics"],
            awards: ["Grammy", "Star on the Wlak of Fame", "Guiness records"],

    });
}); 


app.get('/about', (request, response) => {
    response.render('about', {
            name: "Julio",
            lastName: "Iglesias",
            age: {
                year: 1961,
                month: 08,
            },
            albums: ["El Amor", "Julio", "Romantic Classics"],
            awards: ["Grammy", "Star on the Wlak of Fame", "Guiness record"],

    });
}); 

app.get('/works', (request, response) => {
    response.render('works', {
            name: "Julio",
            lastName: "Iglesias",
            age: {
                year: 1961,
                month: 08,
            },
            albums: ["El Amor", "Julio", "Rommantic Classics"],
            awards: ["Grammy", "Star on the Wlak of Fame", "Guiness record"],

    });
}); 

app.get('/photos', (request, response) => {
    response.render('photos', {
            name: "Julio",
            lastName: "Iglesias",
            age: {
                year: 1961,
                month: 08,
            },
            albums: ["El Amor", "Julio", "Rommantic Classics"],
            awards: ["Grammy", "Star on the Wlak of Fame", "Guiness record"],

    });
}); 



app.listen (3000);