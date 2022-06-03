require("dotenv").config();
const debug = require("debug")("astrofactory:server:controllers");
const chalk = require("chalk");
const AstroPart = require("../../database/models/AstroPart");

const getAstroParts = async (req, res) => {
  debug(chalk.bold.cyanBright("AstroParts request received"));

  const astropart = await AstroPart.find();
  res.status(200).json(astropart);
};

const deleteAstroPart = async (req, res) => {
  debug(chalk.bold.redBright("Request to delete an Astro Part received"));

  const { idAstroPart } = req.params;

  await AstroPart.findByIdAndDelete(idAstroPart);
  res.status(200).json({
    msg: `Your Astro Part has been deleted (Astro Part number ${idAstroPart})`,
  });
};

module.exports = {
  getAstroParts,
  deleteAstroPart,
};
