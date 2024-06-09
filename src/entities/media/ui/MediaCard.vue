<template>
  <div class="media-block">
    <div class="media-block__left">
      <v-img class="media-block__img" max-width="200" :src="img"/>
    </div>
    <div class="media-block__right">
      <h2 class="media-block__title">{{ title?.userPreferred ?? title?.romaji }}</h2>
      <div v-if="descriptionIsHtml" class="media-block__description" v-html="description"></div>
      <div v-else class="media-block__description">{{ description }}</div>
    </div>
  </div>  
</template>
<script lang="ts">
import { ComputedRef, defineComponent } from 'vue';
import { RecommendedSearchMediaProps } from '../model';
import { getDescriptionIsHtml } from '../lib';
export default defineComponent({
  props: {
    img: {
      type: String,
      default: null,
    },
    title: {
      type: Object,
      require: true, 
    },
    description: {
      type: String,
      default: '',
    }
  },
  setup(props: RecommendedSearchMediaProps) {
    const descriptionIsHtml: ComputedRef<boolean> = getDescriptionIsHtml(props);
    return {...props, descriptionIsHtml}
  },
})
</script>
<style lang="scss" scoped>
.media-block {
  display: flex;
  gap: 15px;
  padding: 5px 3px;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.2s;
  &:hover {
    background: rgb(var(--v-theme-hover));
  }
  &__left {
    flex: 1;
    width: 200px;
    max-width: 200px;
  }
  &__right {
    flex: 1;
  }
  &__title {
    font-size: 25px;
    margin-bottom: 10px;
  }
}
</style>