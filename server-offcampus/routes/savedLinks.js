const express = require("express");
const router = express.Router();
const {
  getSavedLink,
  getSavedLinks,
  createSavedLink,
  deleteSavedLink,
} = require("../controllers/SavedLinks");

router.get("/", getSavedLinks);

router.get("/:id", getSavedLink);

router.post("/", createSavedLink);

router.delete("/:id", deleteSavedLink);

module.exports = router;
