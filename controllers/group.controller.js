const Group = require("../models/group.model");

const getGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).json({
      message: "Groups has been found successfully",
      data: groups,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Groups query failed",
      error: err,
    });
  }
};

module.exports = {
  getGroups,
};
