const mongoose = require("mongoose");
const HoldingSchema = require("../schema/HoldingsSchema");


const HoldingModel = mongoose.model("Holding", HoldingSchema);

module.exports = HoldingModel;

