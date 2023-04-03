const db = require("mongodb").Db;
const fs = require("fs"),
  csv = require("csv-parser");

// (B) READ CSV FILE
var results = [];
fs.createReadStream("./data/Rocsv.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => console.log(results));

// csv.parseFile("./data/rocsv.csv", (err, data) => {
//   if (err) throw err;

//   //loop through data
//   data.forEach((record) => {
//     //create object from data
//     let obj = {
//       field1: record[0],
//       field2: record[1],
//       //etc...
//     };
//     //insert object into database
//     db.collection("collectionName").insert(obj, (err, result) => {
//       if (err) throw err;
//       console.log("Object created!");
//     });
//   });
// });
// db.console.log(db);

console.log(results);
