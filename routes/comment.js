const app = require("express")
const router = app.Router();

const {create_comment, get_all_comments, get_comment, update_comment, comment_delete_one,comment_delete_many} = require("../controllers/comment")

router.post("/", create_comment);
router.get("/", get_all_comments);
router.get("/:id", get_comment);
router.put("/:id", update_comment);
router.delete("/:id", comment_delete_one);
router.delete("/", comment_delete_many);

module.exports = router;
