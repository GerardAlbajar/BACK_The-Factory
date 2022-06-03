const express = require("express");
const { getAstros, deleteAstro } = require("../controllers/astroController");

const astroRouter = express.Router();

astroRouter.get("/", getAstros);
astroRouter.delete("/:idAstro", deleteAstro);

module.exports = astroRouter;
