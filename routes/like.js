const like = require("../controllers/likes/like");

const app = require("express");

const router = app.Router();

router.post("/", like);
