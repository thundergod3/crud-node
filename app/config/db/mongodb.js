const mongoose = require("mongoose");

const dbURI =
	"mongodb+srv://congphan:test123@cluster0.vvygu.mongodb.net/crud-node";

const connectMongoDB = () => {
	mongoose
		.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => console.log("Connect succeeded to server"))
		.catch((err) => console.log(err));
};

module.exports = connectMongoDB;
