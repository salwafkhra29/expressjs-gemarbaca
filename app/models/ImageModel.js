const mongoose = require("mongoose");

const { Schema } = mongoose;

// Create a new schema
const imageSchema = new Schema(
	{
		image: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

// Create a model based on the schema
const Image = mongoose.model("Image", imageSchema);

// Export the model
module.exports = Image;
