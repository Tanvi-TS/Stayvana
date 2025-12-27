const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listing.js");

//index route 
router.get("/", wrapAsync(listingController.index))

//new listing
router.get("/new", isLoggedIn, listingController.renderNewForm)

router.post("/", isLoggedIn, validateListing,
    wrapAsync(listingController.createListing))

//show route
router.get("/:id", wrapAsync(listingController.showListing))

//edit route
router.get("/:id/edit", 
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm))

router.put("/:id",
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing))

//delete listing
router.delete("/:id",
    isLoggedIn, 
    isOwner,
    wrapAsync(listingController.deleteListing))

module.exports = router;