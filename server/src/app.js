const express = require("express");
// use path to get the full path to the imported
// documents, using __dirname
const path = require("path");
// include code from our mongoose.js module.
// as we don't need anything from there we don't store it in a variable
require(path.join(__dirname, "mongoose.js"));

// instantiate the server
const app = express();

const port = 3000;

// set the view engine to ejs
app.set("view engine", "ejs");

// Make Express parse incoming requests body as json
app.use(express.json());

// include the Album model
const Water = require(path.join(__dirname, "../models/water.js"));

app.post("water", async (req, res) => {
  console.log(req.body);
  let water = new Water(req.body);
  try {
    await water.save();
    res.status(201).send("Test success" + water.time);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

// start the server by calling 'listen'
app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
