const config = require("../config");
const GemarBaca = require("../models/GemarBacaModel");

fetchAll = (req, res) => {
	GemarBaca.find()
		.select("_id title about imageUrl createdAt updatedAt")
		.then((gemarBacas) => {
			res.status(200).send({
				code: 200,
				message: "Success",
				gemarBacas: gemarBacas,
			});
		})
		.catch((err) => {
			res.status(500).send({
				code: 500,
				message:
					err.message ||
					"Some error occurred while retrieving Gemar Baca.",
			});
		});
};

store = (req, res) => {
	// Validate request
	if (!req.body.title) {
		return res.status(400).send({
			code: 400,
			message: "Title harus diisi!",
		});
	}

	if (!req.body.about) {
		return res.status(400).send({
			code: 400,
			message: "About harus diisi!",
		});
	}

	// Create a GemarBaca
	const gemarBaca = new GemarBaca({
		title: req.body.title,
		about: req.body.about,
		image_id: req.body?.image_id,
	});

	// Save GemarBaca in the database
	gemarBaca
		.save()
		.then((data) => {
			res.status(201).send({
				code: 201,
				message: "Success",
				gemarBaca: data,
			});
		})
		.catch((err) => {
			res.status(500).send({
				code: 500,
				message:
					err.message ||
					"Some error occurred while creating the GemarBaca.",
			});
		});
};

module.exports = { fetchAll, store };
