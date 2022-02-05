const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album',
    },
}, {timestamps: true});

module.exports = mongoose.model('Purchase', purchaseSchema);