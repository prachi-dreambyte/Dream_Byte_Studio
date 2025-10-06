const router = require("express").Router()

const authMiddleware = require("../../middleware/auth");
const { requestSignin, getLoggedInUser } = require('./index')

router.post('/login', requestSignin)
router.get('/user-info', authMiddleware, getLoggedInUser);

module.exports = router