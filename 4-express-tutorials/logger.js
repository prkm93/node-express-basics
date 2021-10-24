// req => middleware => res
// middleware have access to both req and res, will do some functionality and then send the response

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next()  //OR res.send('some message'); its important to pass the data from middleware to res
}

module.exports = logger;