<template>
    <div v-if="items?.length">
    <h3 class="title">{{ title }}</h3>
    <vue-horizontal responsive v-if="items?.length" class="horizontal">
      <character-list-item
        v-for="(item, index) in items"
        class="media-list-item"
        :key="index"
        :id="item?.id"
        :image="item?.image"
        :name="item?.name"
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
        width="100"
        min-height="160"
      />
    </vue-horizontal>
  </div>
</template>

<script lang="ts">
import { Character, Maybe } from "@/shared/__generated__/graphql";
import CharacterListItem from "@/entities/character/ui/CharacterListItem.vue";
import VueHorizontal from 'vue-horizontal';
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: 'CharacterList',
  components: { VueHorizontal, CharacterListItem },
  props: {
    items: {
      type: Object as PropType<Maybe<Maybe<Character[]>>>,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  }
})
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