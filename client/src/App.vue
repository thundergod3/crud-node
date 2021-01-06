<template>
	<div class="app__container">
		<Form
			:addTodoItem="addTodoItem"
			:idTodoItem="idTodoItem"
			:detailItem="detailItem"
			:editStatus="editStatus"
			:editTodoItem="editTodoItem"
		/>
		<TodoList
			:todoList="todoList"
			:idTodoItem="idTodoItem"
			:getIdTodoItem="getIdTodoItem"
			:deleteTodoItem="deleteTodoItem"
		/>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, Ref, ref } from "vue";

import TodoList from "./components/todos/TodoList/index.vue";
import Form from "./components/layouts/Form/index.vue";

import { ToDoItemI, TodoListI } from "./store/TodoStore";

import todoService from "./services/todoService";

import "./style.scss";
import { AxiosResponse } from "axios";

export default defineComponent({
	name: "App",
	components: {
		TodoList,
		Form,
	},
	setup() {
		const todoList: Ref<TodoListI> = ref([]);
		const idTodoItem: Ref<string> = ref("");
		const detailItem: Ref<ToDoItemI> = ref({});
		const editStatus: Ref<Boolean> = ref(false);

		const addTodoItem = async (todoForm: ToDoItemI): Promise<void> => {
			const {
				data: { todoItem },
			}: AxiosResponse<any> = await todoService.createTodoItem(todoForm);

			todoList.value.push(todoItem);
			editStatus.value = false;
		};

		const getIdTodoItem = (id: string) => {
			idTodoItem.value = id;
			detailItem.value = todoList.value.filter((todoItem: ToDoItemI): boolean => todoItem._id === id)[0];
			editStatus.value = true;
		};

		const editTodoItem = async (id: string, todoItem: ToDoItemI): Promise<any> => {
			todoList.value = todoList.value.map((item: ToDoItemI): ToDoItemI => (item._id === id ? todoItem : item));
			editStatus.value = false;
			idTodoItem.value = "";
			await todoService.editTodoItem(id, todoItem);
		};

		const deleteTodoItem = async (id: string) => {
			todoList.value = todoList.value.filter((todoItem: ToDoItemI): boolean => todoItem._id !== id);
			await todoService.deleteTodoItem(id);
		};

		onMounted(async () => {
			const { data }: AxiosResponse<any> = await todoService.fetchTodoList();
			todoList.value = data;
		});

		onUnmounted(() => {
			console.log("a");
		});

		return {
			todoList,
			idTodoItem,
			editStatus,
			addTodoItem,
			getIdTodoItem,
			detailItem,
			deleteTodoItem,
			editTodoItem,
		};
	},
});
</script>
