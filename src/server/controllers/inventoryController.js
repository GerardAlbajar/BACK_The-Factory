require("dotenv").config();
const debug = require("debug")("astrofactory:controllers:inventoryControllers");
const chalk = require("chalk");
const Astro = require("../../database/models/Astro");
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
  debug(chalk.bold.redBright("Request to delete an Astro Item received"));

  const { idUser, inventoryKey, idItemToRemove } = req.params;

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
  }).populate({
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

  res.status(200).json(updatedUser.inventory);
};

const addInventoryItem = async (req, res) => {
  debug(chalk.bold.redBright("Request to add an Astro Item received"));

  const { idUser, inventoryKey, idItemToAdd } = req.params;

  const { inventory } = await User.findById(idUser);

  const updatedItems = inventory[inventoryKey];

  updatedItems.push(idItemToAdd);

  const updatingProperty = {
    inventory: {
      ...inventory,
      [inventoryKey]: updatedItems,
    },
  };

  const updatedUser = await User.findByIdAndUpdate(idUser, updatingProperty, {
    new: true,
  }).populate({
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

  res.status(200).json(updatedUser.inventory);
};

const createInventoryItem = async (req, res) => {
  debug(chalk.bold.redBright("Request to create Mutant Astro received"));

  const { idUser } = req.params;
  const astroParts = req.body;

  const { inventory } = await User.findById(idUser);

  const newMutantAstro = await Astro.create(astroParts);

  const updatedItems = inventory.perfect;

  updatedItems.push(newMutantAstro);

  const updatingProperty = {
    inventory: {
      ...inventory,
      perfect: updatedItems,
    },
  };

  const updatedUser = await User.findByIdAndUpdate(idUser, updatingProperty, {
    new: true,
  }).populate({
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

  res.status(200).json(updatedUser.inventory);
};

module.exports = {
  getInventory,
  deleteInventoryItem,
  addInventoryItem,
  createInventoryItem,
};
