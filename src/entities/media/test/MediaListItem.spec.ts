import { vuetify } from "@/shared/plugins/vuetify";
import MediaListItem from "../ui/MediaListItem.vue"
import { mount, shallowMount } from '@vue/test-utils';
import { VImg } from "vuetify/lib/components/index.mjs";


test('Render and text prop', () => {
  const options = {
    props: {
      title: {
        userPreferred: 'Custom text'
      }
    }
  }
  const item = shallowMount(MediaListItem, options);
  expect(item.find('.block__title').text()).toBe('Custom text')
})

test('Render img', () => {
  const item = mount(MediaListItem, {
    props: {
      img: {
        large: 'test-pic.png'
      }
    },
    global: {
      components:{
        'v-img': VImg
      },
      plugins: [vuetify]
    }
  });
  expect(item.getComponent(VImg).props().src).toEqual('test-pic.png');
})