const express = require("express");
const {
  getAstroParts,
  deleteAstroPart,
  getAstroPart,
} = require("../controllers/astroPartController");

const astroPartRouter = express.Router();

astroPartRouter.get("/", getAstroParts);
astroPartRouter.get("/:idAstroPart", getAstroPart);
astroPartRouter.delete("/:idAstroPart", deleteAstroPart);

module.exports = astroPartRouter;
