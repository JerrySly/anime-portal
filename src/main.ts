import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./app/App.vue";
import router from "./app/providers/router";
import ApolloClient from 'apollo-boost';
import VueApollo from "vue-apollo";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { myCustomTheme } from "./shared/styles/variabels";


const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme,
    }
  },
})

const pinia = createPinia();

createApp(App).use(vuetify).use(router).use(pinia).mount("#app");
