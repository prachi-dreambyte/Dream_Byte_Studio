const router = require("express").Router();
const AuthRoutes = require("../controllers/Auth/routes");
const BlogRoutes = require("../controllers/blogs/routes");
const ServiceRoutes = require("../controllers/services/routes");
const Queries = require("../controllers/queries/routes");

router.use("/auth", AuthRoutes);
router.use("/blogs", BlogRoutes);
router.use("/services", ServiceRoutes);
router.use("/queries", Queries);

module.exports = router;
