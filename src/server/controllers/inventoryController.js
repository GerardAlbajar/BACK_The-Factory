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

module.exports = { getInventory };
