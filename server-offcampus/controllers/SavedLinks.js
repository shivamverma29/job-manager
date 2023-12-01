const SavedLink = require("../models/SavedLinksModel");
const mongoose = require("mongoose");

const getSavedLinks = async (req, res) => {
  const savedLinks = await SavedLink.find({}).sort({ createdAt: -1 });
  res.status(200).json(savedLinks);
};

const getSavedLink = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "savedLinks not found." });
  }

  const savedLinks = await SavedLink.findById(id);
  if (!savedLinks) {
    return res.status(404).json({ error: "savedLinks not found." });
  }
  res.status(200).json(savedLinks);
};

const createSavedLink = async (req, res) => {
  const { company, url, liked } = req.body;
  try {
    const savedLinks = await SavedLink.create({ company, url, liked });
    res.status(200).json(savedLinks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteSavedLink = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "savedLinks not found." });
  }
  const savedLinks = await SavedLink.findOneAndDelete({ _id: id });
  if (!savedLinks) {
    return res.status(400).json({ error: "savedLinks not found." });
  }
  res.status(200).json(savedLinks);
};

module.exports = {
  getSavedLink,
  getSavedLinks,
  createSavedLink,
  deleteSavedLink,
};
