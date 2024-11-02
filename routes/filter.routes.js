const router = require("express").Router();
const { getFilters } = require("../controllers/filter.controller");

router.get("/get-filters", getFilters);

module.exports = router;
