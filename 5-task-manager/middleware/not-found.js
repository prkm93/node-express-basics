const notFound = (req, res) => res.status(400).send('Route doesn\'t exist');

module.exports = notFound;