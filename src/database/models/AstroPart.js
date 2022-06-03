const { Schema, model } = require("mongoose");

const AstroPartSchema = new Schema({
  idRender: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  framework: {
    type: String,
    required: true,
  },
  assembled: {
    type: Boolean,
    required: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
  partimage: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const AstroPart = model("AstroPart", AstroPartSchema, "astroparts");

module.exports = AstroPart;
