const express = require('express');
const data = require('./data');
const app = express();
const HTTP_PORT = 8080;


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/index', (req, res) => {
    res.render('index');
  });

app.get('/user', (req, res) => {
  res.render('user', { users: data.users });
});

app.get('/products', (req, res) => {
  res.render('products', { products: data.products });
});

app.get('/greaterThan3', (req, res) => {
  const greaterProducts = data.products.filter(product => product.PID >= 3);
  res.render('greaterThan3', { products: greaterProducts });
});

app.listen(HTTP_PORT,()=>{
    console.log(`The server is listening on : ${HTTP_PORT}`);
})

