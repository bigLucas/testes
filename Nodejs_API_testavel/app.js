// API testavel escrita com ES2015
// Seguindo turorial do you tube 
// link para tutorial: https://www.youtube.com/watch?v=l4glc0XNVbM&list=PLz_YTBuxtxt74aOA2W8ArqZpsPlxP-JC9
// Parei aqui --> https://www.youtube.com/watch?v=JYbDq4LF0jo&list=PLz_YTBuxtxt74aOA2W8ArqZpsPlxP-JC9&index=6

const express = require('express');
const config = require('./config/config');
const datasource = require('./config/datasource');
const bodyParser = require('body-parser');


const app = express();
app.config = config;
app.datasource = datasource(app);
app.set('port', 7000);
app.use(bodyParser.json());
const Books = app.datasource.models.Books;

app.route('/books')
.get((req, res) => {
    Books.findAll({})
    .then(result => res.json(result))
    .catch(err => res.status(412));
})
.post((req, res) => {
    Books.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(412));
});

app.route('/books/:id')
.get((req, res) => {
    Books.findOne({where: req.params})
    .then(result => res.json(result))
    .catch(err => res.status(412));
})
.put((req, res) => {
    Books.update(req.body, {where: req.params})
    .then(result => res.json(result))
    .catch(err => res.status(412));
})
.delete((req, res) => {
    Books.destroy({where: req.params})
    .then(result => res.sendStatus(204))
    .catch(err => res.status(412));
});
module.exports = app;