const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    sex : String,
    bodyType : String,
    height : Number,
    weightMeasures : [{ date : Date, weight: Number }],
    email: String,
    meta: {
        active: [ Date ],
        createdAt : { type: Date, default: Date.now }
    }
});

module.exports = mongoose.model('User', userSchema);
