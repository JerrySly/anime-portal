<template>
  <div v-if="items?.length">
    <h3 class="title">{{ title }}</h3>
    <vue-horizontal responsive v-if="items?.length" class="horizontal">
      <media-list-item
        v-for="(item, index) in items"
        class="media-list-item"
        :key="index"
        :id="item?.id"
        :img="item?.coverImage"
        :title="item?.title"
      />
    </vue-horizontal>
  </div>
  <div class="skeleton-list" v-else>
    <div class="skeleton-list__title-block">
      <v-skeleton-loader
          class="skeleton-list__title"
          type="subtitle"
          width="700"
      />
    </div>
    <vue-horizontal responsive>
      <v-skeleton-loader
        v-for="(_, index) in 10"
        class="skeleton-list__item"
        :key="index"
        type="card"
        width="200"
        min-height="260"
      />
    </vue-horizontal>
  </div>
</template>

<script lang="ts">
import VueHorizontal from 'vue-horizontal';
import MediaListItem from '@/entities/media/ui/MediaListItem.vue';
import { PropType, watch } from 'vue';
import { Media } from '@/shared/__generated__/graphql';
import { loaded } from '@/pages/feed/model';

export default {
  name: 'MediaList',
  components: { 
    VueHorizontal,
     MediaListItem },
  props: {
    items: {
      type: Object as PropType<Array<Media>>,
      require: true,
    },
    title: {
      type: String,
      require: true,
    }
  },
  setup(props: any) { // TODO: Нужно поставить нужный тип
    return {
      ...props,
      loaded,
    }
  },
}
</script>

<style lang="scss" scoped>
.horizontal {
  :deep(.v-hl-btn-next) {
    top: 120px !important;
    bottom: 0 !important;
    right: -20px !important;
    transform: translateX(0) !important;
    align-self: flex-start !important;
  }
  :deep(.v-hl-btn-prev) {
    top: 120px !important;
    bottom: 0 !important;
    left: -15px !important;
    transform: translateX(0) !important;
    align-self: flex-start !important;
  }
}
.skeleton-list {
  &__title-block {
    display: flex;
    justify-content: center;
  }
  &__title {

  }
  &__item {
    margin: 0px 10px 0px 10px;
  }
}
.title {
  font-size: 28px;
}
.media-list-item {
  padding: 5px 10px;
}
</style>