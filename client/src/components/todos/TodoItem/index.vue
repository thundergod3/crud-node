<template> </template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: ["todoItem"],
	setup(props) {
		console.log(props);
	},
});
</script>

<style></style>
