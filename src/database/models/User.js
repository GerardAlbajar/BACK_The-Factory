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
      default: ["629a2ed8ec4b32f200362464"],
    },
    part: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "AstroPart",
        },
      ],
      default: ["629a2e8fec4b32f200362452"],
    },
  },
});

const User = model("User", UserSchema, "users");

module.exports = User;
