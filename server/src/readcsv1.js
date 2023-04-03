const fs = require("fs");
const mongodb = require("mongodb").MongoClient;
const fastcsv = require("fast-csv");

// let url = "mongodb://username:password@localhost:27017/";
let url = "mongodb://localhost:27017/";
let stream = fs.createReadStream("./data/ROcsv.csv");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function (data) {
    csvData.push({
      Time: data[0],
      CIT_01: data[1],
      TIT_01: data[2],
      PIT_03: data[3],
      PIT_04: data[4],
      Stage1_Pressure_Drop: data[5],
      PIT_05: data[6],
      PIT_06: data[7],
      Stage2_Pressure_Drop: data[8],
      FIT_03: data[9],
      CIT_02: data[10],
      PIT_07: data[11],
      FIT_02: data[12],
      FIT_01: data[13],
    });
  })
  .on("end", function () {
    // remove the first line: header
    csvData.shift();

    console.log(csvData);

    mongodb.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) throw err;

        client
          .db("water_analyze")
          .collection("try")
          .insertMany(csvData, (err, res) => {
            if (err) throw err;
            console.log(`Inserted: ${res.insertedCount} rows`);
            client.close();
          });
      }
    );
  });

stream.pipe(csvStream);
