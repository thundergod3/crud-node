import { Express } from "express";

import todoRouter from "./todo.route";

const routes = (app: Express): void => {
	app.use("/", todoRouter);
};

export default routes;
