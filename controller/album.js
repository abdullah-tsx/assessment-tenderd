const Album = require('../model/album');

module.exports.createAlbum = async (req, res, next) => {
    const {title, performer, cost} = req.body;

    const album = new Album({title, performer, cost: +cost});

    try {
        const result = await album.save();

        res.status(201).json({statusCode: 201, data: result});
    } catch (err) {
        next(err);
    }
}

module.exports.getAllAlbums = async (req, res, next) => {

    try {
        const result = Album.find();

        res.status(200).json({statusCode: 200, data: result});
    } catch (error) {
        next(error);
    }
}

module.exports.getAlbum = async (req, res, next) => {
    const id = req.params.id;

    try {
        const result = await Album.findById(id);

        res.status(200).json({statusCode: 200, data: result});

    } catch (error) {
        next(error);
    }
}

module.exports.deleteAlbum = async (req, res, next) => {
    const id = req.params.id;

    try {
        const result = await Album.deleteOne({_id: id});

        res.status(200).json({statusCode: 200, data: result});

    } catch (error) {
        next(error);
    }
}

module.exports.update = async (req, res, next) => {
    const id = req.params.id;
    const {title, performer, cost} = req.body;

    try {
        const album = await Album.findById(id);

        album.title = title || album.title;
        album.performer = performer || album.performer;
        album.cost = +cost || album.cost

        const result = await album.save();

        res.status(200).json({statusCode: 200, data: result});

    } catch (err) {
        next(err);
    }
}