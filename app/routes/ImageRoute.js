const router = require("express").Router();
const ImageController = require("../controllers/ImageController");

router.post("/", ImageController.store);

module.exports = router;
