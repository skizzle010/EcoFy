const app = require("express")
const router = app.Router();
const Auth = require("../middleware/auth.js")


const {create_comment, get_all_comments, get_comment, update_comment, comment_delete_one,comment_delete_many} = require("../controllers/comment")

router.post("/",Auth.verifyToken, create_comment);
router.get("/",Auth.verifyToken, get_all_comments);
router.get("/:id", get_comment);
router.put("/:id",Auth.verifyToken, update_comment);
router.delete("/:id",Auth.verifyToken, comment_delete_one);
router.delete("/",Auth.verifyToken, comment_delete_many);

module.exports = router;
