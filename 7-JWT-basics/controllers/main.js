const login = async (req, res) => {
    res.send('fake login/register/signup route');
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg: `Hello, jonh doe`, secret: `here is authorised data, lucky number${luckyNumber}`});
}

module.exports = {
    login, dashboard
}