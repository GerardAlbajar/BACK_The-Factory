const express = require("express");
const {
  getInventory,
  deleteInventoryItem,
} = require("../controllers/inventoryController");

const inventoryRouter = express.Router();

inventoryRouter.get("/:idUser", getInventory);
inventoryRouter.delete(
  "/:idUser/:inventoryKey/:idItemToRemove",
  deleteInventoryItem
);

module.exports = inventoryRouter;
