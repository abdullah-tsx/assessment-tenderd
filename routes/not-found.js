const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    res.status(404).json({statusCode: 404, message: 'Invalid URL'});
});

module.exports = router;