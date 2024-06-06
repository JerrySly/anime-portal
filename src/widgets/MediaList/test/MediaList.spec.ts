import { mount, shallowMount, VueWrapper } from "@vue/test-utils";
import MediaList from "../ui/MediaList.vue";
import { ApolloClients   } from '@vue/apollo-composable'
import { Media } from "@/shared/__generated__/graphql";
import VueHorizontal from "vue-horizontal";
import { ref } from "vue";

const media: Media = {
  id: 1,
  isFavourite: false,
  isFavouriteBlocked: false,
  coverImage: {
    large: 'test',
  }
} 

test('Render title', async () => {

  const customTitle = 'CUSTOM TITLE';
  const component = mount(MediaList, {
    props: {
      title: customTitle,
      items: [
        media
      ]
    },
  })
  const h3 = component?.find('h3');
  const hmtl = component.html();
  expect(component?.find('h3').text()).toEqual(customTitle);
})

test('Render carousel', () => {
  
  const item = mount(MediaList, {
    props: {
      title: '',
      items: [
        media
      ]
    }
  })
  expect(item.getComponent(VueHorizontal).isVisible()).toBe(true);
})