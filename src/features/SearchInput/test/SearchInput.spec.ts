import { mount } from "@vue/test-utils";
import SearchInput from "../ui/SearchInput.vue";
import { VAutocomplete } from "vuetify/lib/components/index.mjs";
import { vuetify } from "@/shared/plugins/vuetify";

const loadFuncMock = jest.fn(x => x)

loadFuncMock.mockReturnValue('x');

test('Test type reaction', async () => {
  const wrapper = mount(SearchInput, {
    props: {
      loadFunc: loadFuncMock
    },
    global: {
      components:{
        'v-autocomplete': VAutocomplete
      },
      plugins: [vuetify]
    }
  })
  wrapper.find('input').setValue('x');

  const spy = jest.spyOn(wrapper.vm, 'debouncedSearch')
  // expect(spy.).toBeCalledTimes(1);
})