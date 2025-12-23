const express = require("express");
const app = express();
const mongoose = require("mongoose");
let port = 8080;
const Listing = require("./models/listing.js");
const mongo_url = "mongodb://127.0.0.1:27017/stayvana";
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");

main().then(()=>{
    console.log("Connected to database");
}).catch((err)=>{
    console.log("NOT Connected to database");
    console.log(err);
})
async function main() {
  await mongoose.connect(mongo_url);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);

app.get("/", (req,res)=>{
    res.send("Jai Ambey Maiya ki Jai");
})

//for all undefined paths 
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
    let{statusCode="500", message="Something went wrong !"} = err;
    res.render("error.ejs", {statusCode, message});
});

app.listen(port, ()=>{
    console.log("server is listening on port : "+ port);
});
