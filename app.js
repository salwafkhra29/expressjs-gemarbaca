const express = require("express");
const app = express();
const config = require("./app/config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

/** Import Router --> Here <-- */
app.get("/", (req, res) => {
	res.send({
		message: "Welcome to NodeJS-Express with MongoDB : Gemar Baca API",
	});
});

const AuthRoute = require("./app/routes/AuthRoute");
const GemarBacaRoute = require("./app/routes/GemarBacaRoute");

app.use("/api", AuthRoute);
app.use("/api/gemar-baca", GemarBacaRoute);

/** End Import Router */

/** Listen Port Server */
app.listen(config.SERVER_PORT, () =>
	console.log(`Server is running on port ${config.SERVER_PORT}`)
);

/** Connect To Database */
mongoose
	.connect(config.URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		bufferCommands: true,
	})
	.then(() => console.log(`MongoDB is running on URL : ${config.URI} `))
	.catch((err) => console.log(err));

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(config.URI, {
// 	serverApi: {
// 		version: ServerApiVersion.v1,
// 		strict: true,
// 		deprecationErrors: true,
// 	},
// });
// async function run() {
// 	try {
// 		// Connect the client to the server	(optional starting in v4.7)
// 		await client.connect();
// 		// Send a ping to confirm a successful connection
// 		await client.db("admin").command({ ping: 1 });
// 		console.log(
// 			"Pinged your deployment. You successfully connected to MongoDB!"
// 		);
// 	} finally {
// 		// Ensures that the client will close when you finish/error
// 		await client.close();
// 	}
// }
// run().catch(console.dir);
