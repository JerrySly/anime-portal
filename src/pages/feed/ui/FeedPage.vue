<template>
  <div class="feed">
    <div class="feed__search">
      <search-block />
    </div>
    <media-list
      title="Popular anime"
      :items="popularAnime"
    />
    <media-list
      title="Popular manga"
      :items="popularManga"
    />
    <div class="feed__list"
      v-if="listMedia?.length"  
    >
      <infinite-list
        :loading="loading"
        :onIntersect="loadPage"
        :items="listMedia"
      >
        <template #card="{ item }">
          <media-card
            :title="item.title"
            :img="item.coverImage?.large"
            :description="item.description"
          />
        </template>
      </infinite-list>
    </div>
  </div>
</template>

<script lang="ts">
import SearchBlock from '@/widgets/SearchBlock/ui/SearchBlock.vue'
import MediaList from '@/widgets/MediaList/ui/MediaList.vue'
import { defineComponent, onMounted } from 'vue'
import {listMedia, loading, popularAnime, popularManga} from '../model'
import { loadListMedia, loadPopular } from '../lib'
import InfiniteList from '@/widgets/InfiniteList/ui/InfiniteList.vue'
import MediaCard from '@/entities/media/ui/MediaCard.vue'
import { useMainStore } from '@/store/main'

export default defineComponent({
  components: { SearchBlock, MediaList, InfiniteList, MediaCard },
  setup() {
    const store = useMainStore();
    const loadPage = () => {
      loading.value = true;
      loadListMedia(store.page, 15, 'ANIME', ['FINISHED', 'RELEASING'], 'UPDATED_AT_DESC').then(data => {
        store.SET_PAGE(store.page + 1);
        store.SET_LIST_ITEMS([...store.items, ...data.listItems.Page.media])
        listMedia.value = store.items;
        loading.value = false;
      })
    }
    onMounted(() => {
      loadPopular().then(data => {
        popularAnime.value = data.popularAnime.Page.media;
        popularManga.value = data.popularManga.Page.media;
      })
      loadPage();
    });
    return {
      popularAnime,
      popularManga,
      listMedia,
      loadPage,
    }
  }
})
</script>

<style lang="scss" scoped>
.feed {
  margin-right: 10px;
  &__search {
    margin: auto;
    width: 70%;
    margin-top: 50px;
  }
}

</style>