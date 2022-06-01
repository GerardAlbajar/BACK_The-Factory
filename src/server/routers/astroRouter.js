const express = require("express");
const { getAstros } = require("../controllers/astroController");

const astroRouter = express.Router();

astroRouter.get("/", getAstros);

module.exports = astroRouter;
