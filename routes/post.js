const app = require("express")
const router = app.Router();

const {create_post, getmyposts, get_post, update_post,deleteOne,deleteall } = require("../controllers/post")

router.post("/", create_post);
router.get("/", getmyposts);
router.get("/:id", get_post);
router.put("/:id", update_post);
router.delete("/:id", deleteOne);
router.delete("/", deleteall);

module.exports = router;
