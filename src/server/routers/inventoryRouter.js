const express = require("express");
const {
  getInventory,
  deleteInventoryItem,
  addInventoryItem,
  createInventoryItem,
} = require("../controllers/inventoryController");

const inventoryRouter = express.Router();

inventoryRouter.get("/:idUser", getInventory);
inventoryRouter.delete(
  "/:idUser/:inventoryKey/:idItemToRemove",
  deleteInventoryItem
);
inventoryRouter.post("/:idUser/:inventoryKey/:idItemToAdd", addInventoryItem);
inventoryRouter.post("/:idUser", createInventoryItem);

module.exports = inventoryRouter;
