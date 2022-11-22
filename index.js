const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const messageRouter = require('./message')
const PORT = process.env.PORT || 5000
const cors = require('cors');
const app = express()

app.use(express.json())
app.use("/api", authRouter)
app.use("/api/v1", messageRouter)
app.use(cors());
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});


const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/social')
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

