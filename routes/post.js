const app = require("express")
const router = app.Router();

const {create_post, get_posts, get_post, update_post, delete_post} = require("../../controllers/posts")

router.post("/", create_post);
router.get("/", get_posts);
router.get("/:id", get_post);
router.put("/:id", update_post);
router.delete("/:id", delete_post);

module.exports = router;
