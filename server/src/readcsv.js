const mongodb = require("mongodb").MongoClient; //import MongoClient from mongodb module.
const csvtojson = require("csvtojson");

let url = "mongodb://localhost:27017/"; //Then we initialize value for MongoDB url, it indicates the host & the port.
//// let url = "mongodb://username:password@localhost:27017/"; --> set username & password in this url.

csvtojson()
  .fromFile("./data/ROcsv.csv")
  .then((csvData) => {
    console.log(csvData);
    mongodb.connect(
      //use connect() function of MongoClient to connect MongoDB.
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) throw err;
        client
          .db("water_analyze")
          .collection("first_data")
          .insertMany(csvData, (err, res) => {
            //returns a Collection object corresponding to "category" collection in ROcsv database.
            if (err) throw err;

            console.log(`inserted: ${res.insertedCount} rows`);
            client.close();
          });
      }
    );
  });
