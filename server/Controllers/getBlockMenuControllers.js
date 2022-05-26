const BlockMenu = require("../Models/blockMenuModel");

exports.getBlockMenu = (req, res) => {
  BlockMenu.find({}, (error, result) => {
    res.send(result);
  });
};
