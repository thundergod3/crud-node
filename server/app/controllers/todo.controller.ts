import { NextFunction, Request, Response } from "express";

import TodoList, { TodoI, TodoListI } from "../../models/todo.model";

class TodoController {
	// [GET]
	getTodoList = (req: Request, res: Response, next: NextFunction): any =>
		TodoList.find({}).then<Response<any>>((todoList: TodoListI) => res.json(todoList));

	getTodoDetail = (req: Request, res: Response, next: NextFunction): void => {
		const { id } = req.query;
		TodoList.findById(id)
			.then((todoItem: TodoI | any): any => res.json(todoItem))
			.catch((err: any) => res.json({ msg: err.message }));
	};

	// [POST]
	createTodo = (req: Request, res: Response, next: NextFunction): void => {
		const todoItem = new TodoList(req.body);
		todoItem
			.save()
			.then(() => res.json({ msg: "Create todo item succeeded", todoItem }))
			.catch((err) => res.json({ msg: err.message }));
	};

	// [PUT]
	updateTodo = (req: Request, res: Response, next: NextFunction): any =>
		TodoList.updateOne({ _id: req.query.id }, req.body)
			.then(() => res.json({ msg: "Update succeeded" }))
			.catch((err: any) => res.json({ msg: err.message }));

	// [DELETE]
	deleteTodo = (req: Request, res: Response, next: NextFunction): any =>
		TodoList.findByIdAndDelete(req.query.id).then(() => res.json({ msg: "Delete succeeded" }));
}

export default new TodoController();
