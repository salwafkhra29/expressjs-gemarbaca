const router = require("express").Router();
const GemarBacaController = require("../controllers/GemarBacaController");

router.get("/", GemarBacaController.fetchAll);
router.post("/", GemarBacaController.store);
router.put("/:id", GemarBacaController.updateGemarBaca);
router.delete("/:id", GemarBacaController.deleteGemarBaca);

module.exports = router;
