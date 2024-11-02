const router = require("express").Router();
const { login } = require("../controllers/auth.controller");

router.post("/dashboard/login", login);

module.exports = router;
