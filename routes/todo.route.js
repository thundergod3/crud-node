const { Router } = require("express");
const TodoController = require("../controllers/todo.controller");

const todoRouter = Router();

todoRouter.get("/", TodoController.getTodoList);
todoRouter.get("/detail", TodoController.getTodoDetail);

todoRouter.post("/create", TodoController.createTodo);

module.exports = todoRouter;
