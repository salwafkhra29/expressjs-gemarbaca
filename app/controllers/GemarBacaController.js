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
		description: req.body?.description,
		image_id: req.body?.image_id,
		user_id: req.body?.user_id,
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

updateGemarBaca = (req, res) => {
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

	// Find GemarBaca and update it with the request body
	GemarBaca.findByIdAndUpdate(
		req.params.id,
		{
			title: req.body.title,
			about: req.body.about,
			description: req.body?.description,
			image_id: req.body?.image_id,
			user_id: req.body?.user_id,
		},
		{ new: true }
	)

		.then((gemarBaca) => {
			if (!gemarBaca) {
				return res.status(404).send({
					code: 404,
					message: "GemarBaca not found with id " + req.params.id,
				});
			}
			res.status(200).send({
				code: 200,
				message: "Success",
				gemarBaca: gemarBaca,
			});
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					code: 404,
					message: "GemarBaca not found with id " + req.params.id,
				});
			}
			return res.status(500).send({
				code: 500,
				message: "Error updating GemarBaca with id " + req.params.id,
			});
		});
};

deleteGemarBaca = (req, res) => {
	GemarBaca.findByIdAndRemove(req.params.id)

		.then((gemarBaca) => {
			if (!gemarBaca) {
				return res.status(404).send({
					code: 404,
					message: "GemarBaca not found with id " + req.params.id,
				});
			}
			res.status(200).send({
				code: 200,
				message: "Success",
			});
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					code: 404,
					message: "GemarBaca not found with id " + req.params.id,
				});
			}
			return res.status(500).send({
				code: 500,
				message: "Could not delete GemarBaca with id " + req.params.id,
			});
		});
};

module.exports = { fetchAll, store, updateGemarBaca, deleteGemarBaca };
