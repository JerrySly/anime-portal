<template>
  <router-link name="media" :to="{name: 'media', params: {id: id}}">
    <div class="block">
      <v-img
        class="block__image"
        cover
        v-if="img?.large"
        :src="img.large"
      />
      <p class="block__title">
        {{ title?.userPreferred }}
      </p>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Maybe, MediaCoverImage, MediaTitle } from '@/shared/__generated__/graphql'
import { PropType } from 'vue'
export default {
  props: {
    id: {
      type: Number,
      require: true,
    },
    img: {
      type: Object as PropType<Maybe<MediaCoverImage>>,
      require: true,
    },
    title: {
      type: Object as PropType<Maybe<MediaTitle>>,
      require: true, 
    },
  },
  setup(props: any) { // TODO: Нужно поставить нужный тип
    return {
      ...props,
    }
  }
}
</script>

<style lang="scss" scoped>
  .block {
    &__image {
      border-radius: 4px;
      height: 260px;
      width: 200px;
    }
    &__title {
      width: 180px

    }
  }
</style>