const todoRouter = require("./todo.route");

const routes = (app) => {
	app.use("/", todoRouter);
};

module.exports = routes;
