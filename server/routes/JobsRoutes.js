const express = require("express");
const router = express.Router();
const {
  getjob,
  getjobs,
  createjob,
  deletejob,
} = require("../controllers/JobsController");

router.get("/", getjobs);

router.get("/:id", getjob);

router.post("/", createjob);

router.delete("/:id", deletejob);

module.exports = router;
