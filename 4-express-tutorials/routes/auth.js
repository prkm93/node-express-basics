const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name } = req.body; // name is attribute in form input
    console.log(req.body);
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please provide credentials');
})

module.exports = router;