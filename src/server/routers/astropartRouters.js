const express = require("express");
const { getAstroParts } = require("../controllers/astroPartController");

const astroPartRouter = express.Router();

astroPartRouter.get("/", getAstroParts);

module.exports = astroPartRouter;
