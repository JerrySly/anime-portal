<template>
  <search-input :loadFunc="searchMedia">
    <template #item-block="{item}">
      <div class="ml-2 pa-2">
        <recommended-search-media :img="item.props?.coverImage?.large" :title="item.props?.value.title" :description="item.props.description"/>
      </div>
    </template>
  </search-input>
</template>

<script>
import SearchInput from '@/features/SearchInput/ui/SearchInput.vue'
import RecommendedSearchMedia from '@/entities/media/ui/RecommendedSearchMedia.vue';
import { searchMedia } from '@/widgets/SearchBlock/api';

export default {
  components: { SearchInput, RecommendedSearchMedia },
  setup() {
    return { searchMedia }
  }
}
</script>

<style>

</style>