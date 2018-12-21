const express = require('express');
const app = express();
const hbs = require('hbs');

app.use( express.static( __dirname + '/public' ) );
hbs.registerPartials( __dirname + '/views/parciales' );
app.set( 'view engine', 'hbs' );

app.get('/', ( req, res ) =>{
	res.render('home', {
		nombre:'Yamil',
		anio: new Date().getFullYear()
	});
});
app.get('/about', ( req, res ) =>{
	res.render('about', {
		nombre:'Yamil',
		anio: new Date().getFullYear()
	});
});
app.listen(3000);