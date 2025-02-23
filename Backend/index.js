if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.port || 3002;
const HoldingModel = require("./models/HoldingModel");
const OrderModel = require("./models/OrderModel");
const PositionModel = require("./models/PositionModel");
const WatchListModel = require("./models/WatchListModel");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const MongoDB = process.env.MongoDB_URL;
mongoose.connect(MongoDB).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


// Routes
app.get('/holdings', async (request, response) => {

    let allPHoldings = await HoldingModel.find({});
    if (allPHoldings) {
        response.send(allPHoldings);
    } else {
        response.send([]);
    }
});
// Order

app.get('/orders', async (request, response) => {

    let allOrders = await OrderModel.find({});
    if (allOrders) {
        response.send(allOrders);
    } else {
        response.send([]);
    }

});
//add Order

app.post('/orders', async (request, response) => {
    let { name, qty, price, mode } = request.body;

    let newOrder = new OrderModel({
        name,
        qty,
        price,
        mode
    })

    await newOrder.save();
});

//delete Order

app.delete('/orders/:id', async (request, response) => {

    let { id } = request.params;

    let FindOrder = await OrderModel.findById(id);
    if (!FindOrder) {
        response.send("Not Found")
    } else {
        await OrderModel.findByIdAndDelete(id);
        response.send("Order Cancel")
    }
});
// Position
app.get('/positions', async (request, response) => {
    let allPositions = await PositionModel.find({});
    if (allPositions) {
        response.send(allPositions);
    } else {
        response.send([]);
    }
});
// wishlist
app.get('/watchlist', async (request, response) => {
    let allWatchStock = await WatchListModel.find({});
    if (allWatchStock) {
        response.send(allWatchStock);
    } else {
        response.send([]);
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});
