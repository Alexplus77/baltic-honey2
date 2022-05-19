const mongoose = require("mongoose");

const navbarMenuSchema = mongoose.Schema({
  article: {
    title: String,
    body: String,
    image: String,
  },
  categoryName: String,
});

module.exports = mongoose.model("navbarMenu", navbarMenuSchema);
