const express = require('express');
const path = require('path');
const app = express();

//setup static and middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//     // res.status(200).send('home page');
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
//  adding to static assets
//  SSR 
// })

app.get('/about', (req, res) => {
    res.status(200).send('About page');
})

app.all('*', (req, res) => {
    res.status(404).end('<h1>resource not found!</h1>');
})

app.listen(3000, () => {
    console.log(`server is listening on port 3000`);
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen