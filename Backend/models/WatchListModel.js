const mongoose = require("mongoose");
const WatchListSchema = require("../schema/WatchListSchema");



const WatchListModel = mongoose.model("Watchlist", WatchListSchema);

module.exports = WatchListModel;