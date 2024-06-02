<template>
  <div class="feed">
    <div class="feed__search">
      <search-block />
    </div>
    <media-list
      title="Popular anime"
      :items="popularAnime?.Page?.media"
    />
    <media-list
      title="Popular manga"
      :items="popularManga?.Page?.media"
    />
  </div>
</template>

<script>
import SearchBlock from '@/widgets/SearchBlock/ui/SearchBlock.vue'
import MediaList from '@/widgets/MediaList/ui/MediaList.vue'
import { onMounted } from 'vue'
import {popularAnime, popularManga} from '../model'
import { loadPopular } from '../lib'

export default {
  components: { SearchBlock, MediaList },
  setup() {
    onMounted(() => {
      loadPopular().then(data => {
        popularAnime.value = data.popularAnime;
        popularManga.value = data.popularManga;
      })
    });
    return {
      popularAnime,
      popularManga,
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