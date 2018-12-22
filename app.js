const express = require('express');
const app = express();
const hbs = require('hbs');

app.use( express.static( __dirname + '/public' ) );
require('./hbs/helpers');

const PORT = process.env.PORT || 3000;

//Express HBS engine
hbs.registerPartials( __dirname + '/views/parciales' );
app.set( 'view engine', 'hbs' );

app.get('/', ( req, res ) =>{
	res.render('home', {
		nombre:'Yamil'		
	});
});
app.get('/about', ( req, res ) =>{
	res.render('about');
});
app.listen( PORT );
