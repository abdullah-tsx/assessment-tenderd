const User = require('../model/user');

module.exports.signup = async (req, res, next) => {

    const {name, email, password} = req.body;

    const newUser = new User({name, email, password});

    try {
        const result = await newUser.save();

        if (!result) {
            throw new Error('Something went wrong');
        }

        res.status(200).json({data: result});

    } catch (err) {
        next(err);
    }
}

module.exports.signin = (req, res, next) => {
    res.set('Authorization', Math.random().toString());
    res.status(200).json({statusCode: 200, message: 'Logged in successfully',});
}

module.exports.signout = (req, res, next) => {
    res.removeHeader('Authentication');
    res.status(200).json({statusCode: 200, message: 'Logged out successfully'});
}