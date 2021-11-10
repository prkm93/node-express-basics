console.log('04 Store API')

require('dotenv').config()

const express = require('express');
const app = express();

const connectDB = require('./db/connect');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// middlware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send(
        ('<h1>Store API</h1><a href="/api/v1/products">Products route</a>')
    )
})


app.use('/api/v1/products');


//product route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async() => {
    try {
        // connect DB
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening on ${port}...`));
    } catch (err) {
        console.log(err);
    }
}

start();