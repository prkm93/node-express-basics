const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error); // this next gets catched in errorHandler Middleware
        }
    }
}

module.exports = asyncWrapper;