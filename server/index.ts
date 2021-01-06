import express, { Express } from "express";
import cors from "cors";

import connectMongoDB from "./app/config/db/mongodb";
import routes from "./routes";

const PORT: number = 3000;
const app: Express = express();

// connect to mongodb
connectMongoDB();

// Middleware
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

// routes
routes(app);

app.listen(PORT, (): void => {
	console.log(`Server start in port ${PORT}`);
});
