const router = require("express").Router();
const ImageController = require("../controllers/ImageController");

router.get("/:id", ImageController.find);
router.post("/", ImageController.store);
router.put("/:id", ImageController.updateImage);
router.delete("/:id", ImageController.deleteImage);

module.exports = router;
