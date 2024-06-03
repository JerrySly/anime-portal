import { mount, shallowMount } from "@vue/test-utils";
import MediaList from "../ui/MediaList.vue";
import { ApolloClients   } from '@vue/apollo-composable'
import { Media } from "@/shared/__generated__/graphql";
import VueHorizontal from "vue-horizontal";

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

  const item = mount(MediaList, {
    props: {
      title: customTitle,
      items: [
        media
      ]
    }
  })
  await item.vm.$nextTick();
  console.log(item.html());
  expect(item.find('.title').text()).toEqual(customTitle);
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

  expect(item.getComponent(VueHorizontal)).toMatchSnapshot();
})