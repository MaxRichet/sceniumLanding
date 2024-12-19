const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let emailSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Email', emailSchema);