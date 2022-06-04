const express = require("express");
const { getInventory } = require("../controllers/inventoryController");

const inventoryRouter = express.Router();

inventoryRouter.get("/:idUser", getInventory);

module.exports = inventoryRouter;
