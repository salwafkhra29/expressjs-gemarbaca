const path = require("path");
const crypto = require("crypto");
const multer = require("multer");

const express = require("express");
const router = express.Router();

// const upload = multer({
// 	storage: multer.diskStorage({
// 		destination: "uploads/",
// 		filename: (req, file, cb) => {
// 			crypto.randomBytes(16, (err, buf) => {
// 				if (err) {
// 					return cb(err);
// 				}
// 				const filename =
// 					buf.toString("hex") + path.extname(file.originalname);
// 				cb(null, filename);
// 			});
// 		},
// 	}),
// });

// // Get All Gemar Baca
// router.get("/", (req, res) => {
// 	res.send("Get All Gemar Baca");
// });

// router.post("/upload", upload.single("file"), (req, res) => {
// 	if (!req.file) {
// 		return res.status(400).json({ error: "No file uploaded" });
// 	}

// 	// File was uploaded successfully
// 	res.json({ message: "File uploaded" });
// });

module.exports = router;
