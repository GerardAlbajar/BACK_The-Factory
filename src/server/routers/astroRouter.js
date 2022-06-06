const express = require("express");
const {
  getAstros,
  deleteAstro,
  getAstro,
} = require("../controllers/astroController");

const astroRouter = express.Router();

astroRouter.get("/", getAstros);
astroRouter.get("/:idAstro", getAstro);
astroRouter.delete("/:idAstro", deleteAstro);

module.exports = astroRouter;
