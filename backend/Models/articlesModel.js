const mongoose = require("mongoose");

const articlesSchema = mongoose.Schema({
  category: String,
  block: String,
  article: [
    {
      title: String,
      content: String,
      image: String,
    },
  ],
});

module.exports = mongoose.model("articles", articlesSchema);
