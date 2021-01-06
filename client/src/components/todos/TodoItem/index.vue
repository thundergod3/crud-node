<template>
	<li class="todo-item">
		<h6>{{ todoItem.title }}</h6>
		<div class="todo-item__iconContainer">
			<span class="todo-item__iconItem todo-item--success" @click="getIdTodoItem(todoItem._id)">
				<i className="fas fa-pen" />
			</span>
			<span class="todo-item__iconItem todo-item--danger" @click="deleteTodoItem(todoItem._id)">
				<i className="fas fa-trash" />
			</span>
		</div>
	</li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import "./style.scss";

export default defineComponent({
	props: ["todoItem", "getIdTodoItem", "deleteTodoItem"],
	setup({ todoItem }) {},
});
</script>

<style></style>
