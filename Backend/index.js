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
app.get('/addHoldings', async (request, response) => {

    

    response.send("<h1>Adding Holding </h1>");

});
// Order

app.get('/orders', async (request, response) => {


});
// Position
app.get('/positions', async (request, response) => {

       response.send("<h1>Adding Position </h1>");

});

// Start server
app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});
