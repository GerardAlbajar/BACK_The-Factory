const { Schema, model } = require("mongoose");

const AstroSchema = new Schema({
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
    astro: {
      id: {
        type: Schema.Types.ObjectId,
        ref: "AstroPart",
        required: true,
      },

      image: String,
    },
    naut: {
      id: {
        type: Schema.Types.ObjectId,
        ref: "AstroPart",
        required: true,
      },

      image: String,
    },
    rocket: {
      id: {
        type: Schema.Types.ObjectId,
        ref: "AstroPart",
        required: true,
      },

      image: String,
    },
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Astro = model("Astro", AstroSchema, "astros");

module.exports = Astro;
