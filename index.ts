import express, { Express } from "express";

import connectMongoDB from "./app/config/db/mongodb";
import routes from "./routes";

const PORT: number = 3000;
const app: Express = express();

// connect to mongodb
connectMongoDB();

// Add plugin
app.use(express.urlencoded());
app.use(express.json());

// routes
routes(app);

app.listen(PORT, (): void => {
	console.log(`Server start in port ${PORT}`);
});
