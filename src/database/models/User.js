const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  inventory: {
    perfect: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Astro",
        },
      ],
      default: [],
    },
    part: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "AstroPart",
        },
      ],
      default: [],
    },
  },
});

const User = model("User", UserSchema, "users");

module.exports = User;
