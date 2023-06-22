const config = require("../config");
const Image = require("../models/ImageModel");

find = (req, res) => {
	const { id } = req.params;
	Image.findById(id)
		.then((image) => {
			res.status(200).send({
				code: 200,
				message: "Success",
				image: image,
			});
		})
		.catch((err) => {
			res.status(500).send({
				code: 500,
				message:
					err.message ||
					"Some error occurred while retrieving Image.",
			});
		});
};

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

updateImage = (req, res) => {
	const { id } = req.params;
	const { base64 } = req.body;

	Image.findByIdAndUpdate(id, {
		image: base64,
	})

		.then((image) => {
			if (!image) {
				return res.status(404).send({
					code: 404,
					message: "Image not found with id " + req.params.id,
				});
			}
			res.status(200).send({
				code: 200,
				message: "Success update image",
				image: image,
			});
		})
		.catch((err) => {
			res.status(500).send({
				code: 500,
				message:
					err.message ||
					"Some error occurred while retrieving Image.",
			});
		});
};

deleteImage = (req, res) => {
	const { id } = req.params;

	Image.findByIdAndRemove(id)
		.then((image) => {
			if (!image) {
				return res.status(404).send({
					code: 404,
					message: "Image not found with id " + req.params.id,
				});
			}
			res.status(200).send({
				code: 200,
				message: "Success",
			});
		})
		.catch((err) => {
			res.status(500).send({
				code: 500,
				message:
					err.message ||
					"Some error occurred while retrieving Image.",
			});
		});
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

module.exports = { store, find, updateImage, deleteImage };
