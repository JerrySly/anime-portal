import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./app/App.vue";
import router from "./app/providers/router";

import 'vuetify/styles'
import { vuetify } from "./shared/plugins/vuetify";



const pinia = createPinia();

const app = createApp(App); 
app.use(vuetify).use(router).use(pinia).mount("#app");
