require("dotenv").config();
const debug = require("debug")("astrofactory:controllers:inventoryControllers");
const chalk = require("chalk");
const User = require("../../database/models/User");

const getInventory = async (req, res, next) => {
  debug(chalk.blueBright("Inventory request has been received"));
  const { idUser } = req.params;
  try {
    const { inventory } = await User.findById(idUser).populate({
      path: "inventory",
      populate: [
        {
          path: "perfect",
        },
        {
          path: "part",
        },
      ],
    });

    res.status(200).json(inventory);
  } catch {
    const error = new Error("We couldn't find any match with this username");
    error.code = 404;
    next(error);
  }
};

const deleteInventoryItem = async (req, res) => {
  debug(chalk.bold.redBright("Request to delete an Astro Part received"));

  const { idUser, inventoryKey, idItemToRemove } = req.params;

  const { inventory } = await User.findById(idUser);

  const updatedItems = inventory[inventoryKey].filter(
    // eslint-disable-next-line no-underscore-dangle
    (astroItem) => astroItem._id.toString() !== idItemToRemove
  );

  const updatingProperty = {
    inventory: {
      ...inventory,
      [inventoryKey]: updatedItems,
    },
  };

  const updatedUser = await User.findByIdAndUpdate(idUser, updatingProperty, {
    new: true,
  });

  res.status(200).json(updatedUser);
};

module.exports = {
  getInventory,
  deleteInventoryItem,
};
