const { Schema, model } = require("mongoose");

const AstroSchema = new Schema({
  id: {
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
  flighthistory: {
    type: Boolean,
    required: true,
  },
  stickers: {
    type: Number,
    required: true,
  },
  framework: {
    type: String,
  },
  assembled: {
    type: Boolean,
    required: true,
  },
  parts: {
    rocket: {
      type: Schema.Types.ObjectId,
      ref: "AstroPart",
      required: true,
    },
    astro: {
      type: Schema.Types.ObjectId,
      ref: "AstroPart",
      required: true,
    },
    naut: {
      type: Schema.Types.ObjectId,
      ref: "AstroPart",
      required: true,
    },
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Astro = model("Astro", AstroSchema, "astros");

module.exports = Astro;
