const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {

        const {id, name, image, price, desc} = product;
        return {id, name, image};
    })
    res.send(newProducts);
})

app.get('/api/products/:productId', (req, res) => {
    console.log(req);
    console.log(req.params);
    const { productId } = req.params;
    const singleProduct = products.find(product => product.id === Number(productId));
    
    if (!singleProduct) {
        res.status(404).send('<h2>Product doesn\'t exist</h2>');
    }
    
    res.json( singleProduct);
})

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    res.send('hello world');
    console.log(req.params); // { productId: '5', reviewId: 'abc' }
})

app.get('/api/v1/query', (req, res) => {
    // console.log(req.query); //{ name: 'john', age: '26' }
    const {search, limit} = req.query;
    let sortedProducts = [...products];
    
    if (search) {
        sortedProducts = sortedProducts.filter(product => {
            return product.name.startsWith(search);
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    res.status(200).json(sortedProducts);
    res.send('hello world');
})

app.listen(3000, () => {
    console.log('server is listening on port 3000');
})