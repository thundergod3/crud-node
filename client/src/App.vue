<template>
	<div class="app__container">
		<TodoList />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TodoList from "./components/todos/TodoList/index.vue";

import "./style.scss";

export default defineComponent({
	name: "App",
	components: {
		TodoList,
	},
});
</script>
