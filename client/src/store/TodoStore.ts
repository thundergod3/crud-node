import postService from "@/services/postService";
import { AxiosResponse } from "axios";
import { Store } from "vuex";

interface ToDoItemI {
	id?: string;
	title: string;
	body: string;
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
	},
	actions: {
		fetchTodoList: async ({ commit }: any) => {
			const { data }: AxiosResponse<any> = await postService.fetchPostList();
			commit("getTodoList", data);
		},
	},
};

export default TodoStore;
