import { createApp } from "vue";
import App from "./App.vue";
import configureStore from "./store/configureStore";

createApp(App)
	.use(configureStore)
	.mount("#app");
