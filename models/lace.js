const mongoose = require("mongoose");

// Lace schema
const laceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  laceImg: String,
  pattern: String,
  favorite: { type: Boolean, default: false },
});

const Lace = mongoose.model("Lace", laceSchema);

module.exports = Lace;
