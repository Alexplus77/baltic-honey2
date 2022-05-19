const mongoose = require("mongoose");

const asideMenuSchema = mongoose.Schema({
  article: {
    title:String,
    body:String,
    image:String
  },
  categoryName: String,
});

module.exports = mongoose.model("asideMenu", asideMenuSchema);
