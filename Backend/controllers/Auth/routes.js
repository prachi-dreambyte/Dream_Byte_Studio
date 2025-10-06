const router = require("express").Router();
const authMiddleware = require("../../middleware/auth");
const { requestSignin, getLoggedInUser, logoutUser } = require("./index");

router.post("/login", requestSignin);
router.get("/user-info", authMiddleware, getLoggedInUser);
router.post("/logout", authMiddleware, logoutUser);

module.exports = router;
