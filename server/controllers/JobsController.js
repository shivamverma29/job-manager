const jobs = require("../models/JobsModel");
const mongoose = require("mongoose");

const getjobs = async (req, res) => {
  const data = await jobs.find({}).sort({ createdAt: -1 });
  res.status(200).json(data);
};

const getjob = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "data not found." });
  }
  const data = await jobs.findById(id);
  if (!data) {
    return res.status(404).json({ error: "data not found." });
  }
  res.status(200).json(data);
};

const createjob = async (req, res) => {
  const { company, type, lastDate, role, url, year, batch, applied } = req.body;
  try {
    const data = await jobs.create({
      company,
      type,
      lastDate,
      role,
      url,
      year,
      batch,
      applied,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletejob = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "data not found." });
  }
  const data = await jobs.findOneAndDelete({ _id: id });
  if (!data) {
    return res.status(400).json({ error: "data not found." });
  }
  res.status(200).json(data);
};

module.exports = {
  getjob,
  getjobs,
  createjob,
  deletejob,
};
