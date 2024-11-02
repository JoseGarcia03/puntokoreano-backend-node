const router = require("express").Router();
const { getGroups } = require("../controllers/group.controller");

router.get("/get-groups", getGroups);

module.exports = router;
