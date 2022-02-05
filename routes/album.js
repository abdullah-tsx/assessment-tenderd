const express = require('express');
const albumController = require('../controller/album');
const {isAuth} = require('../middleware/isAuth');
const router = express.Router();

router.get('/albums', albumController.getAllAlbums);
router.get('/albums/:id', albumController.getAlbum);

router.post('/albums', isAuth, albumController.createAlbum);
router.put('/albums/:id', isAuth, albumController.update);

router.delete('/albums/:id', isAuth, albumController.deleteAlbum);

module.exports = router;