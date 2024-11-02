const Filter = require("../models/filter.model.js");

const getFilters = async (req, res) => {
  try {
    const filters = await Filter.findOne();
    res.status(200).json({
      message: "Filters has been found successfully",
      data: filters,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Filters query failed",
      error: err,
    });
  }
};

module.exports = {
  getFilters,
};
