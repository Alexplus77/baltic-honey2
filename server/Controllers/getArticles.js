const Articles = require("../Models/siteConstructionModel");

exports.getArticles = (req, res) => {
  try {
    Articles.findOne({ "category.name": req.body.category }, (err, doc) => {
      const articles = doc?.category?.find(
        (el) => el.name === req.body?.category
      )?.articles;
      res.send(articles.find((el) => el.title === req.body?.name));
    });
  } catch (e) {}
};
