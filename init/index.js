require("dotenv").config();

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongo_url = process.env.MONGO_URI;

main().then(()=>{
    console.log("Connected to database");
}).catch((err)=>{
    console.log("NOT Connected to database");
    console.log(err);
})
async function main() {
  await mongoose.connect(mongo_url);
}

const initDb = async () => {
    await Listing.deleteMany({});

    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "6a7b754b57406b92a9576286"
    }));

    const inserted = await Listing.insertMany(initData.data);

    console.log("Sample data is initialised");
    console.log("Number of listings inserted:", inserted.length);
    console.log("Database:", mongoose.connection.name);
    console.log("Collection:", Listing.collection.name);
};

initDb();