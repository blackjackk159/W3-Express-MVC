const express = require("express");
const PostsController = require("../controllers/posts");

const router = express.Router();
router
  .route("/posts")
  .get(PostsController.getAll)
  .post(PostsController.createOne)
  .delete(PostsController.deleteAll);

module.exports = router;
