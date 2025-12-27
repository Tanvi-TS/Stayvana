const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongo_url = "mongodb://127.0.0.1:27017/stayvana";

main().then(()=>{
    console.log("Connected to database");
}).catch((err)=>{
    console.log("NOT Connected to database");
    console.log(err);
})
async function main() {
  await mongoose.connect(mongo_url);
}

const initDb = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "694eeb4e8d7ce38b6005e385"
    }))
    await Listing.insertMany(initData.data);
    console.log("Sample data is initialised");
}

initDb();