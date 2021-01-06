import { Router } from "express";

import TodoController from "../app/controllers/todo.controller";

const todoRouter: Router = Router();

todoRouter.get("/", TodoController.getTodoList);
todoRouter.get("/detail", TodoController.getTodoDetail);

todoRouter.post("/create", TodoController.createTodo);

todoRouter.put("/edit", TodoController.updateTodo);

todoRouter.delete("/delete", TodoController.deleteTodo);

export default todoRouter;
