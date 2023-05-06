const express = require("express");
const {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
  blog_api,
} = require("../controllers/blogController");

const router = express.Router();

// blog routes
router.get("/", blog_index);

router.post("/", blog_create_post);

router.get("/create", blog_create_get);

router.get("/api", blog_api);

router.get("/:id", blog_details);

router.delete("/:id", blog_delete);

module.exports = router;
