const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()


mongoose.connect("mongodb+srv://devnov:Abc123@november-cluster.3fretgn.mongodb.net/"
).then(() => app.listen(2500, () =>
    console.log("Connected to the server + port")
)
)
    .catch(e => console.log(e));



