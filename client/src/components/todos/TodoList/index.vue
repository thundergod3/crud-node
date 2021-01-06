<template>
	<ul class="todo-list">
		<h3>Todo List</h3>
		<TodoItem
			v-for="todoItem in todoList"
			:key="todoItem._id"
			:todoItem="todoItem"
			:getIdTodoItem="getIdTodoItem"
			:deleteTodoItem="deleteTodoItem"
		/>
	</ul>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
import { useStore } from "vuex";

import TodoItem from "../TodoItem/index.vue";

import "./style.scss";

export default defineComponent({
	props: ["todoList", "getIdTodoItem", "deleteTodoItem"],
	components: {
		TodoItem,
	},
	setup() {
		// const {
		// 	state: {
		// 		// TodoStore: { todoList },
		// 		todoList,
		// 	},
		// 	dispatch,
		// } = useStore();
		// console.log(todoList);
		// onMounted(() => {
		// 	dispatch("fetchTodoList");
		// });
		// return { todoList };
	},
});
</script>
