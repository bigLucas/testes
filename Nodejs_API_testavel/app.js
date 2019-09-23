// API testavel escrita com ES2015
// Seguindo turorial do you tube 
// link para tutorial: https://www.youtube.com/watch?v=l4glc0XNVbM&list=PLz_YTBuxtxt74aOA2W8ArqZpsPlxP-JC9
// Parei aqui --> https://www.youtube.com/watch?v=C13EbG-e1VY&list=PLz_YTBuxtxt74aOA2W8ArqZpsPlxP-JC9&index=8

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const datasource = require('./config/datasource');
const booksRouter = require('./routes/books');


const app = express();
app.disable('x-powered-by');
app.config = config;
app.datasource = datasource(app);
app.set('port', 7000);
app.use(bodyParser.json());
const Books = app.datasource.models.Books;
booksRouter(app, Books);

module.exports = app;