require("dotenv").config();
const debug = require("debug")("astrofactory:server:controllers");
const chalk = require("chalk");
const AstroPart = require("../../database/models/AstroPart");

const getAstroParts = async (req, res) => {
  debug(chalk.bold.cyanBright("AstroParts request received"));

  const astropart = await AstroPart.find();
  res.status(200).json(astropart);
};

module.exports = {
  getAstroParts,
};
