const config = require("../config");
const Image = require("../models/ImageModel");

store = (req, res) => {
	const { base64 } = req.body;
	try {
		const image = new Image({
			image: base64,
		});

		image
			.save()
			.then((data) => {
				res.status(201).send({
					code: 201,
					message: "Success",
					image: data,
				});
			})
			.catch((err) => {
				res.status(500).send({
					code: 500,
					message:
						err.message ||
						"Some error occurred while creating the Image.",
				});
			});
	} catch (error) {}
};

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

// router.post("/upload", upload.single("file"), (req, res) => {
// 	if (!req.file) {
// 		return res.status(400).json({ error: "No file uploaded" });
// 	}

// 	// File was uploaded successfully
// 	res.json({ message: "File uploaded" });
// });

module.exports = { store };
