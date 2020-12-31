const TodoList = require("../models/todo.model");

class TodoController {
	// [GET]
	getTodoList = (req, res, next) =>
		TodoList.find().then((err, todoList) => {
			console.log(todoList);
			res.json(todoList);
		});

	getTodoDetail = (req, res, next) => {
		const { id } = req.query;
		console.log(id);
		TodoList.findById(id)
			.then((err, todoItem) => res.json(todoItem))
			.catch((err) => res.json({ msg: "Have some error", err }));
	};

	// [POST]
	createTodo = (req, res, next) => {
		const todoItem = new TodoList(req.body);
		console.log(req.body);
		todoItem
			.save()
			.then(() => {
				res.json({ msg: "Create todo item succeeded" });
			})
			.catch((err) => res.json({ msg: "Have some error", err }));
	};

	// [PUT]
	updateTodo = (req, res, next) => {
		console.log(req.param);
	};
}

module.exports = new TodoController();
