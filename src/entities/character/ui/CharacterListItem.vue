<template>
   <router-link name="character" :to="{name: 'character', params: {id: id}}">
    <div class="block">
      <v-img
        v-if="image?.large"
        class="block__image"
        cover
        :src="image.large"
      />
      <v-img
        v-else
        class="block__image"
        cover
        src="@/shared/assets/unknow-person.png"
      />
      <p class="block__title">
        {{ name?.full ?? '?????'}}
      </p>
    </div>
  </router-link>
</template>

<script lang="ts">
import { CharacterImage, CharacterName, Maybe } from "@/shared/__generated__/graphql";
import { defineComponent, PropType } from "vue";

export default defineComponent({
    name: 'CharacterListItem',
    props: {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: Object as PropType<Maybe<CharacterName> | undefined>,
        required: true,
      },
      image: {
        type: Object as PropType<Maybe<CharacterImage> | undefined>,
        required: true,
      }
    }
})
</script>
<style lang="scss" scoped>
  .block {
    text-decoration: none;
    &__image {
      border-radius: 4px;
      height: 170px;
      width: 140px;
    }
    &__title {
      text-align: center;
      width: 140px;
      text-decoration: none !important;
      font-size: 15px;
      color: black;
    }
  }
</style>