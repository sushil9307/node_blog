const express = require('express')

const { render } = require('ejs');
const { urlencoded } = require('express');

app = express();
app.use(express.static('public'));
app.use(urlencoded({extended: false}));

const connection = require('./db')

let articleRouter = require('./routes/articles')

app.use('/', articleRouter) 


app.listen(3000)