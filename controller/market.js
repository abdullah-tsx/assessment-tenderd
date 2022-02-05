const Purchase = require('../model/purchase');

module.exports.create = (req, res, next) => {
    const {user, album} = req.body;

    try {
        const purchase = new Purchase({user: user._id, album: album._id});

        const result = purchase.save();

        res.status(200).send(result);

        
    } catch (err) {
        next(err);
    }
}