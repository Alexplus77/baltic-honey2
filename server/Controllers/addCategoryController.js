const Categories = require("../Models/categoryModel");

exports.addCategory = (req, res) => {
  try {
    new Categories({
      blockMenu: req.body.menuBlock,
      title: req.body.category,
    }).save();
  } catch (e) {}
};
