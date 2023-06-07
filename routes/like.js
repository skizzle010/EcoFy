const like = require("../controllers/like");

const app = require("express");

const router = app.Router();

router.post("/", like);

module.exports = router;

