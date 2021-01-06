import HTTPMethod from "./index";

import { ToDoItemI } from "@/store/TodoStore";

class PostService {
	fetchTodoList = () => HTTPMethod.get("/");

	createTodoItem = (todoForm: ToDoItemI) => HTTPMethod.post("/create", { ...todoForm });

	editTodoItem = (id: string, todoForm: ToDoItemI) => HTTPMethod.put(`/edit?id=${id}`, { ...todoForm });

	deleteTodoItem = (id: string) => HTTPMethod.delete(`/delete?id=${id}`);
}

export default new PostService();
