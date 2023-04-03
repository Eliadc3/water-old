// this file is responsible for DB connection.

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/water_analyze");
