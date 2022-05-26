const Articles = require("../Models/siteConstructionModel");
const BlockMenuModel = require("../Models/blockMenuModel");

exports.getCategories = (req, res) => {
  BlockMenuModel.findOne({ title: "navbar" }, (error, result) => {
    !result && new BlockMenuModel({ title: "navbar" }).save();
  });
  BlockMenuModel.findOne({ title: "menuAside" }, (error, result) => {
    !result && new BlockMenuModel({ title: "menuAside" }).save();
  });

  try {
    Articles.find({}, {}, (error, result) => {
      error && console.log("errorGetCategories", error);
      // const response = result.reduce((acc, elem) => {
      //   if (elem.category.length) {
      //     acc[elem.blockMenuName] = elem.category.map((elem) => ({
      //       name: elem.name,
      //       id: elem._id,
      //     }));
      //   }
      //   return acc;
      // }, {});
      res.send(result);
    });
  } catch (e) {}
};
