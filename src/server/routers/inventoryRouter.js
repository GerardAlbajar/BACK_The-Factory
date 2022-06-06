const express = require("express");
const {
  getInventory,
  deleteInventoryItem,
  addInventoryItem,
} = require("../controllers/inventoryController");

const inventoryRouter = express.Router();

inventoryRouter.get("/:idUser", getInventory);
inventoryRouter.delete(
  "/:idUser/:inventoryKey/:idItemToRemove",
  deleteInventoryItem
);
inventoryRouter.post("/:idUser/:inventoryKey/:idItemToAdd", addInventoryItem);

module.exports = inventoryRouter;
