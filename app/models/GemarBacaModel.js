const mongoose = require("mongoose");

const { Schema } = mongoose;

// Create a new schema
const gemarBacaSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		about: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		image_id: {
			type: String,
		},
		user_id: {
			type: String,
		},
	},
	{ timestamps: true }
);

// Create a model based on the schema
const GemarBaca = mongoose.model("GemarBaca", gemarBacaSchema);

// Export the model
module.exports = GemarBaca;
