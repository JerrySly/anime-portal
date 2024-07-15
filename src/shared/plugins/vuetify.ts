import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { myCustomTheme } from "../styles/variabels";
import { VNumberInput } from 'vuetify/labs/VNumberInput'


export const vuetify = createVuetify({
  components: {
    ...components,
    VNumberInput,
  },
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme,
    }
  },
})
