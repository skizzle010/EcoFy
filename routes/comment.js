const app = require("express")
const router = app.Router();

const {create_comment, get_comments, get_comment, update_comment, delete_comment} = require("../../controllers/comments")

router.post("/", create_comment);
router.get("/", get_comments);
router.get("/:id", get_comment);
router.put("/:id", update_comment);
router.delete("/:id", delete_comment);

module.exports = router;
