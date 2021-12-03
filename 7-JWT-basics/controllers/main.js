// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can access the dashboard
const CustomAPIError = require('../errors/custom-error');

const login = async (req, res) => {
    const {username, password} = req.body;
    console.log(username, password);

    // mongo
    // joi
    // check in the controller

    if (!username && !password) {
        throw new CustomAPIError('Please provide email and password', 400);
    }

    res.send('fake login/register/signup route');
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg: `Hello, jonh doe`, secret: `here is authorised data, lucky number ${luckyNumber}`});
}

module.exports = {
    login, dashboard
}