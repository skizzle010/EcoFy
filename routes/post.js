const app = require("express")
const router = app.Router();
const Auth = require("../middleware/auth.js")

const {create_post, getmyposts, get_post, update_post,deleteOne,deleteall } = require("../controllers/post")

router.post("/",Auth.verifyToken, create_post);
router.get("/",Auth.verifyToken, getmyposts);
router.get("/:id", get_post);
router.put("/:id",Auth.verifyToken, update_post);
router.delete("/:id",Auth.verifyToken, deleteOne);
router.delete("/",Auth.verifyToken, deleteall);

module.exports = router;
