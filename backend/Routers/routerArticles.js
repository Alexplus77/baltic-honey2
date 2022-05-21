const express = require("express");
const router = express.Router();
const articlesPostControllers = require("../Controllers/articlesPostController");
router.post("/:category", articlesPostControllers.articlesPostControllers);
module.exports = router;
