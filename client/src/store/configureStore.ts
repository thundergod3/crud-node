import { createStore } from "vuex";

import TodoStore from "./TodoStore";

const configureStore = createStore({
	modules: {
		TodoStore,
	},
});

export default configureStore;
