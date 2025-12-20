const express = require("express");
const app = express();
const mongoose = require("mongoose");
let port = 8080;
const Listing = require("./models/listing.js");
const mongo_url = "mongodb://127.0.0.1:27017/stayvana";
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

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

//index route 
app.get("/listings", async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", {allListings});
})

//new listing
app.get("/listings/new", (req, res)=>{
    res.render("./listings/new.ejs");
})

app.post("/listings", async (req, res)=>{
    let listing = req.body.listing;
    await Listing.insertOne(listing);
    res.redirect("/listings"); 
})

//show route
app.get("/listings/:id", async (req, res)=>{
    let {id}= req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/show.ejs", {listing});
})

//edit route
app.get("/listings/:id/edit", async (req, res)=>{
    let{id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs", {listing});
})
app.put("/listings/:id", async (req, res)=>{
    let{id} = req.params;
    await Listing.findByIdAndUpdate(id, req.body.listing);
    res.redirect("/listings");
})

//delete
app.delete("/listings/:id", async (req, res)=>{
    let{id} = req.params;
    let deletedListing =await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
})

app.get("/", (req,res)=>{
    res.send("Jai Ambey Maiya ki Jai");
})

app.listen(port, ()=>{
    console.log("server is listening on port : "+ port);
});
