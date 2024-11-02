const router = require("express").Router();
const productRoutes = require("./product.routes");
const filterRoutes = require("./filter.routes");
const groupRoutes = require("./group.routes");
const authRoutes = require("./auth.routes");

const base = "/api/v1";

router.use(`${base}/products`, productRoutes);
router.use(`${base}/filters`, filterRoutes);
router.use(`${base}/groups`, groupRoutes);
router.use(`${base}/auth`, authRoutes);

module.exports = router;
