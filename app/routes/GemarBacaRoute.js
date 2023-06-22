const router = require("express").Router();
const GemarBacaController = require("../controllers/GemarBacaController");

router.get("/", GemarBacaController.fetchAll);
router.post("/", GemarBacaController.store);

module.exports = router;
