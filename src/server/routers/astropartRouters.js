const express = require("express");
const {
  getAstroParts,
  deleteAstroPart,
} = require("../controllers/astroPartController");

const astroPartRouter = express.Router();

astroPartRouter.get("/", getAstroParts);
astroPartRouter.delete("/:idAstroPart", deleteAstroPart);

module.exports = astroPartRouter;
