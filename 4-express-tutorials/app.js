const express = require('express');
const app = express();

let {people} = require('./data');

//static assets
app.use(express.static('./methods-public'));

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people});
})

app.post('/api/people', (req, res) => {

})

app.listen(3000, () => {
    console.log('server is listening on port 3000');
})