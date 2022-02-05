const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    title: {
        type: 'String',
    },
    performer: {
        type: 'String',
    },
    cost: {
        type: 'Number',
    },
}, {timestamps: true});

module.exports = mongoose.model('Album', albumSchema);