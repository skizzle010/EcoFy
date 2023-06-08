const app = require("express");
const router = app.Router();
const Auth = require("../middleware/auth.js");

const {
  post_product,
  buy_product,
  delete_all_prods,
  update_prod,
  get_prod,
  getmyprods,
} = require("../controllers/products");

router.post("/",Auth.verifyToken, post_product);
router.post("/",Auth.verifyToken, buy_product);
router.get("/", get_prod);
router.get("/",Auth.verifyToken, getmyprods);
router.put("/",Auth.verifyToken, update_prod);
router.delete("/",Auth.verifyToken, delete_all_prods);

module.exports = router;


