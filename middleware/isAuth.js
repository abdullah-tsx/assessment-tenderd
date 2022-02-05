module.exports.isAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(403).json({statusCode: 401, message: "Unauthorized"});
    }
    next();
}