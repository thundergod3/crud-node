import todoService from "@/services/todoService";
import { AxiosResponse } from "axios";
interface ToDoItemI {
	_id?: string;
	title?: string;
}

type TodoListI = Array<ToDoItemI>;

interface StateI {
	state: {
		todoList: TodoListI;
	};
	mutations: {};
	actions: {};
}

interface StateInOption {
	todoList: TodoListI;
}

const TodoStore: StateI = {
	state: {
		todoList: [],
	},
	mutations: {
		getTodoList: (state: StateInOption, todoList: TodoListI) => {
			state.todoList = todoList;
		},

		createTodoItem: (state: StateInOption, todoItem: ToDoItemI): void => {
			state.todoList.push(todoItem);
			// state.todoList = [...state.todoList, todoItem];
		},
	},
	actions: {
		fetchTodoList: async ({ commit }: any) => {
			const { data }: AxiosResponse<any> = await todoService.fetchTodoList();
			commit("getTodoList", data);
		},

		createTodoItemServer: async ({ commit }: any, todoForm: ToDoItemI) => {
			const {
				data: { todoItem },
			}: AxiosResponse<any> = await todoService.createTodoItem(todoForm);
			commit("createTodoItem", todoItem);
		},
	},
};

export default TodoStore;
export { ToDoItemI, TodoListI };
