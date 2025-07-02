import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from "./app/router.ts";
import { store } from "./app/store.ts";
import { motionPlugin } from "@oku-ui/motion";

createApp(App).use(router).use(store).use(motionPlugin).mount('#app')
