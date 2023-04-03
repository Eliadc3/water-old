/**
 * this file describes the test model.
 * each model instance created is a document in the collection.
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
   Define the test schema separately from the model declaration
 */
const waterSchema = new Schema({
  name: {
    type: String,
  },
  // time: {
  //   type: Date,
  //   required: true, // mandatory field
  // },
  // CIT_01: {
  //   type: Number,
  // },
  // TIT_01: {
  //   type: Number,
  // },
  // PIT_05: {
  //   type: Number,
  // },
  // PIT_06: {
  //   type: Number,
  // },
  // Stage2_Pressure_Drop: {
  //   type: Number,
  // },
  // FIT_03: {
  //   type: Number,
  // },
  // CIT_02: {
  //   type: Number,
  // },
  // PIT_07: {
  //   type: Number,
  // },
  // FIT_02: {
  //   type: Number,
  // },
  // FIT_01: {
  //   type: Number,
  // },
});

// create a model from the schema.
const Water = mongoose.model("water", waterSchema);

// export the Song model so index.js will be able to use it
module.exports = Water;
