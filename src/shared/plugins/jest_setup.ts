import { render } from "@testing-library/vue";

import { vuetify } from "../plugins/vuetify";

const customRender = (component: any, options: any) => {
  return render(component, { ...options, global: { plugins: [vuetify] } });
};

export { customRender as render };