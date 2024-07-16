<template>
  <div class="media">
    <div class="media__left">
      <v-img :src="selectedMedia?.coverImage?.extraLarge?.toString()" />
      <div
        class="score"
        :class="[
            backgroundScoreClass
          ]">
          {{ selectedMedia?.averageScore }} / 100
        </div>
    </div>
    <div class="media__info">
      <div class="title">{{ selectedMedia?.title?.userPreferred }}</div>
      <div class="tags">
        <tag-button v-for="tag in selectedMedia?.tags?.slice(0, 6)" :tag="tag" :key="tag?.name"/>
      </div>
      <div class="param" v-for="param in params" :key="param.name">
        <div class="param__name">{{ param.name }}:</div>
        <div class="param__value">{{ param.value }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useMediaStore } from '@/shared/store/media'
import TagButton from "@/entities/tag/ui/TagButton.vue";
import { transformCountryToLang, transformStatusToLang } from "@/shared/lib/constantTransform";

export default defineComponent({
  components: { TagButton },
  setup() {
    const route = useRoute();
    const mediaStore = useMediaStore()

    onMounted(async () => {
      const id = Number(route.params.id);
      await mediaStore.GET_SELECT_MEDIA(id);
    });

    const selectedMedia = computed(() => {
      return mediaStore.selectedMedia
    })

    const params = computed(() => [
      { name: 'Status', value: transformStatusToLang(selectedMedia.value?.status) },
      { name: 'Episodes', value: selectedMedia.value?.episodes },
      { name: 'Duration of series', value: selectedMedia.value?.duration },
      { name: 'Country of origin', value: transformCountryToLang(selectedMedia.value?.countryOfOrigin) },
      { name: 'Added to favorite by users (on AniList)', value: selectedMedia.value?.favourites },
      { name: 'Added to any list by users (on AniList)', value: selectedMedia.value?.popularity },
    ]);

    const backgroundScoreClass = computed(() => {
      const score = selectedMedia.value?.averageScore;
      if (!score) return ''
      if (score <= 25) return 'score__low';
      if (score <= 50 && score > 25) return 'score__mid';
      if (score <= 75 && score > 50) return 'score__high';
      return 'score__very-hight'
    })

    return {
      selectedMedia,
      params,
      backgroundScoreClass,
    }
  }
})
</script>

<style lang="scss" scoped>

.media {
  padding: 20px 20px;
  display: flex;
  gap: 40px;
  &__left {
    flex: 30%;
    max-width: 400px;
    .score {
      font-size: 30px;
      margin: auto;
      margin-top: 15px;
      width: 150px;
      border-radius: 8px;
      color: white;
      &__low {
        background: #D32F2F;
      }
      &__mid {
        background: #EF6C00;
      }
      &__high {
        background: #7CB342;
      }
      &__very-high {
        background: #2E7D32;
      }
    }
  }
  &__info {
    flex: 70%;
    text-align: left;

    .title {
      font-size: 30px;
      margin-bottom: 10px;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 10px;

    }

    .param {
      display: flex;
      margin-top: 5px;
      gap: 10px;
      &__name {
        font-size: 19px;
      }
      &__value {
        font-size: 18px;
        color: rgb(var(--v-theme-info__text));

      }
    }
  }
}


</style>