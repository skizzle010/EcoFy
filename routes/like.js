const like = require("../controllers/like");

const app = require("express");
const Auth = require("../middleware/auth.js")


const router = app.Router();

router.post("/",Auth.verifyToken, like);

module.exports = router;

