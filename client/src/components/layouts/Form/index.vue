<template>
	<div class="form">
		<form @submit.prevent="handleSubmit">
			<div class="input-field">
				<div class="input-field__prepend">
					<div class="input-field__iconContainer">
						<i className="fas fa-book" />
					</div>
				</div>
				<input type="text" placeholder="Add A Todo Item" v-model="title" />
			</div>
			<button class="form__submit form--edit" type="submit" v-if="editStatus">
				Edit item
			</button>
			<button class="form__submit" type="submit" v-else>Add item</button>
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, ref, watch, watchEffect } from "vue";

import "./style.scss";

import { useStore } from "vuex";

export default defineComponent({
	props: ["addTodoItem", "detailItem", "editStatus", "editTodoItem"],
	setup(props) {
		const { addTodoItem, editTodoItem } = props;
		const title = ref<string>("");

		const { dispatch } = useStore();

		const handleSubmit = () => {
			// dispatch("createTodoItemServer", { title: title.value });
			// title.value = "";
			// dispatch("fetchTodoList");
			if (props.editStatus) {
				editTodoItem(props.detailItem._id, { title: title.value });
			} else {
				addTodoItem({ title: title.value });
			}

			title.value = "";
		};

		watchEffect(() => {
			title.value = props.detailItem.title;
		});

		return { handleSubmit, title };
	},
});
</script>
