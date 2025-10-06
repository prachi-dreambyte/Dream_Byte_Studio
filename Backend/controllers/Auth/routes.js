const router = require("express").Router();
const { requestSignin, getLoggedInUser, logoutUser } = require("./index");

router.post("/login", requestSignin);
router.get("/user-info", getLoggedInUser);
router.post("/logout", logoutUser);

module.exports = router;
