if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}
const express = require('express');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const port = process.env.port || 3002;
const HoldingModel = require("./models/HoldingModel");
const OrderModel = require("./models/OrderModel");
const PositionModel = require("./models/PositionModel");
const WatchListModel = require("./models/WatchListModel");
const UserModel = require("./models/UserModel");
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

const jwt_secret = process.env.jwt_secret;

const fetchUser = async (request, response, next) => {

    const token = request.header("authToken");

    if (!token) {
        return response.status(401).json("Please Authenticate using valid Token");
    }

    try {
        const data = await jwt.verify(token, jwt_secret);
        request.user = data.user;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return response.status(401).json({ error: "Token has expired, please log in again." });
        } else {
            response.status(400).send("Internal Server Error");
        }
    }
}

// Routes
app.get('/holdings', fetchUser, async (request, response) => {

    let allPHoldings = await HoldingModel.find({});
    if (allPHoldings) {
        response.send(allPHoldings);
    } else {
        response.send([]);
    }
});
// Order

app.get('/orders', fetchUser, async (request, response) => {

    let allOrders = await OrderModel.find({});
    if (allOrders) {
        response.send(allOrders);
    } else {
        response.send([]);
    }

});
//add Order

app.post('/orders', fetchUser, async (request, response) => {

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

app.delete('/orders/:id', fetchUser, async (request, response) => {

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
app.get('/positions', fetchUser, async (request, response) => {
    let allPositions = await PositionModel.find({});
    if (allPositions) {
        response.send(allPositions);
    } else {
        response.send([]);
    }
});
// wishlist
app.get('/watchlist', fetchUser, async (request, response) => {
    let allWatchStock = await WatchListModel.find({});
    if (allWatchStock) {
        response.send(allWatchStock);
    } else {
        response.send([]);
    }
});


// User Routes Signup 
app.post("/signup", async (request, response) => {
    const { name, email, password } = request.body;
    if (!name || !email || !password) {
        return response.status(400).json({ results: "Missing Fields [Check All Fields And Try Again]" });
    }


    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
        return response.status(500).json({ error: "This Email User Already Exist" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    try {
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();


        const data = {
            user: {
                id: savedUser.id
            }
        }


        const authToken = await jwt.sign(data, jwt_secret, { expiresIn: '7d' });

        response.status(200).json({ authToken });
    } catch (error) {
        response.status(500).json({ error: "Internal Server Error User Not Created" });
    }

})

// User Routes  login
app.post("/login", async (request, response) => {
    let { email, password } = request.body;

    if (!email || !password) {
        return response.status(400).json({ results: "Missing Fields [Check All Fields And Try Again]" });
    }

    try {


        const userFind = await UserModel.findOne({ email });

        if (!userFind) {
            return response.status(404).json({ error: "Incorrect Credentials ,Try With Correct Credentials or Signup" });
        }

        const passwordCompare = await bcryptjs.compare(password, userFind.password);

        if (!passwordCompare) {
            return response.status(404).json({ error: "Incorrect Credentials ,Try With Correct Credentials or Signup" });
        }

        const data = {
            user: {
                id: userFind.id,
            }
        }

        const authToken = jwt.sign(data, jwt_secret);

        response.status(200).json({ authToken });

    } catch (error) {
        response.status(500).json({ error: "Internal Server Error" });
    }
})


app.use((request, response, next) => {
    next();
})

// Start server
app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});
