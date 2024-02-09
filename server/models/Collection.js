const mongoose = require('mongoose');
const { Schema } = mongoose.Schema;

const CollectionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card' 
    }],
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Virtual for the URL of the collection
CollectionSchema.virtual('url').get(function() {
    return '/api/collections/' + this._id;
});


module.exports = mongoose.model('Collection', CollectionSchema);
