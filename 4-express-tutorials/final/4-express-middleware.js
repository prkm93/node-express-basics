const express = require('express');
const app = express();
const logger = require('./logger');
const morgan = require('morgan');
const authorize = require('./authorize');

// app.use([logger, authorize]); // order matters for defining middleware. all app.use is defined at top

// 1. use vs route
// 2. options - our own / express / third party

app.use(morgan('tiny'));

app.get('/',  (req, res) => {
    res.send('Home');
})

app.get('/about',(req, res) => {
    res.send('About');
})

app.get('/api/products',(req, res) => {
    res.send('Products');
})

app.get('/api/items', [logger, authorize] , (req, res) => {
    console.log(req.user);
    res.send('Items');
})

app.listen(3000, () => {
    console.log('server is listening on port 3000');
})