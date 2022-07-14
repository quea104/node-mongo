const logger = (req, res, next) => {
    console.log('미들웨어 실행');
    next();
};

module.exports = logger;