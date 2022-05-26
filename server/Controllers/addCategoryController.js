const Articles = require("../Models/siteConstructionModel");
const Categories = require("../Models/categoryModel");

exports.addCategory = (req, res) => {
  console.log(req.body);
  Articles.findOne({ blockMenuName: req.body.menuBlock }, (error, result) => {
    !result && new Articles({ blockMenuName: req.body.menuBlock }).save();
  });
  try {
    new Categories({
      blockMenu: req.body.menuBlock,
      title: req.body.category,
    }).save();

    Articles.findOneAndUpdate(
      { blockMenuName: req.body.menuBlock },
      {
        $push: {
          category: {
            name: req.body.category,
          },
        },
      },
      {
        insert: true,
      },
      (err, doc) => {
        err && console.log("errAddCategory", err);
        doc && res.status(200).send(doc);
      }
    );
  } catch (e) {}
};
