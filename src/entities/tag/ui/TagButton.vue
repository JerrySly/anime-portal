<template>
  <router-link class="tag-button" :to="{name: 'home'}">
      {{ tag?.name }}
  </router-link>
</template>

<script lang="ts">
import { Maybe, MediaTag } from "@/shared/__generated__/graphql";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    tag: {
      type: Object as PropType<Maybe<MediaTag>>,
      required: true,
    }
  },
  setup(props) {
    return {
      ...props,
    }
  },
});
</script>

<style lang="scss" scoped>
  .tag-button {
    padding: 2px 4px;
    color: rgb(var(--v-theme-secondary__text));
    border-radius: 4px;
    background: rgb(var(--v-theme-secondary));
    text-decoration: none !important;
  }
</style>