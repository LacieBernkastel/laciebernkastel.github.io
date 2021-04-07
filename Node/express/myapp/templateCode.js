var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
const app = express();
const port = 3002;

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
const data = new Array();
data.push({name:"Justine", surname:"NGUYEN"});

app.get('/', (req, res) => {
    res.render('template', {list:data});
});

app.post('/', (req, res) => {
    data.push(req.body);
    res.render('template', {list:data});
});

app.listen(3002);