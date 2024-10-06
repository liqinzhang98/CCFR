import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { router } from "./routes";
import ElementPlus from 'element-plus';
import {ElMessage} from 'element-plus';

const app = createApp(App)

app.use(createPinia())

app.use(router);

//npm add element-plus
//yarn add element-plus
app.use(ElementPlus);

app.provide(ElMessage);

app.mount("#app");
