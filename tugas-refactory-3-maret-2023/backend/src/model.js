const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const user = new Schema(
  {
    namaLengkap: {
      type: String,
      required: true,
    },
    umur: {
      type: String,
      required: true,
    },
    noHp: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", user);
module.exports = User;
