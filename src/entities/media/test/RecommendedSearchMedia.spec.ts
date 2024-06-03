import { mount } from "@vue/test-utils"
import RecommendedSearchMedia from "../ui/RecommendedSearchMedia.vue"
import { vuetify } from "@/shared/plugins/vuetify"
import { VImg } from "vuetify/lib/components/index.mjs"

test('Render img', () => {

  const src = 'test-src.png'

  const item = mount(RecommendedSearchMedia, {
    props: {
      img: src
    },
    global: {
      plugins: [vuetify]
    }
  })

  expect(item.getComponent(VImg).props().src).toEqual(src);
})

test('Render simple description', () => {

  const desc = 'CUSTOM-DESC'


  const item = mount(RecommendedSearchMedia, {
    props: {
      description: desc, 
    },
  })

  expect(item.find('.media-block__description').text()).toEqual(desc);
})


test('Render html description', () => {

  const desc = '<h1>CUSTOM-DESC</h1>'


  const item = mount(RecommendedSearchMedia, {
    props: {
      description: desc, 
    },
  })

  expect(item.find('.media-block__description').html()).toContain(desc);
})