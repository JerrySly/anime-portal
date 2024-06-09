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

<script>
import SearchBlock from '@/widgets/SearchBlock/ui/SearchBlock.vue'
import MediaList from '@/widgets/MediaList/ui/MediaList.vue'
import { onMounted } from 'vue'
import {listMedia, popularAnime, popularManga} from '../model'
import { loadListMedia, loadPopular } from '../lib'
import InfiniteList from '@/widgets/InfiniteList/ui/InfiniteList.vue'
import MediaCard from '@/entities/media/ui/MediaCard.vue'

export default {
  components: { SearchBlock, MediaList, InfiniteList, MediaCard },
  setup() {
    onMounted(() => {
      loadPopular().then(data => {
        popularAnime.value = data.popularAnime.Page.media;
        popularManga.value = data.popularManga.Page.media;
      })
      loadListMedia(1, 15, 'ANIME', ['FINISHED', 'RELEASING'], 'UPDATED_AT_DESC').then(data => {
        listMedia.value = data.listItems.Page.media;
      })
    });
    return {
      popularAnime,
      popularManga,
      listMedia,
    }
  }
}
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