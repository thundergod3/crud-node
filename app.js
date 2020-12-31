const express = require("express");

const connectMongoDB = require("./app/config/db/mongodb");
const routes = require("./routes");

const PORT = 3000;
const app = express();

// connect to mongodb
connectMongoDB();

// routes
routes(app);

app.listen(PORT, () => {
	console.log(`Server start in port ${PORT}`);
});
