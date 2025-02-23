const { Schema } = require("mongoose");


const WatchListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    percent: {
        type: String,
        required: true
    },
    isDown: {
        type: Boolean,
        required: true
    },
});


module.exports = WatchListSchema;