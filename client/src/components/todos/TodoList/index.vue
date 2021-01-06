<template>
	<div class="todo-list">
		<TodoItem
			v-for="todoItem in todoList"
			:key="todoItem.id"
			:todoItem="todoItem"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";

import TodoItem from "../TodoItem/index.vue";

import "./style.scss";

export default defineComponent({
	components: {
		TodoItem,
	},
	setup() {
		const {
			state: {
				TodoStore: { todoList },
			},
			dispatch,
		} = useStore();

		onMounted(() => {
			dispatch("fetchTodoList");
		});

		return { todoList };
	},
});
</script>
