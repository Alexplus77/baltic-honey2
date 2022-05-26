const Articles = require("../Models/siteConstructionModel");
exports.articlesPostControllers = (req, res) => {
  try {
    console.log(req.body);
    Articles.findOneAndUpdate(
      { blockMenuName: req.body.blockMenu, "category.name": req.body.category },
      {
        $push: {
          "category.$.articles": {
            title: req.body.title,
            content: req.body.content,
          },
        },
      },
      (err, doc) => {
        err && console.log(err);
        console.log(doc);
      }
    );
  } catch (e) {
    console.log(e);
  }
};
