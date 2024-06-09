<template>
  <search-input :loadFunc="searchMedia">
    <template #item-block="{item}">
      <div class="ml-2 pa-2">
        <media-card :img="item.props?.coverImage?.large" :title="item.props?.value.title" :description="item.props.description"/>
      </div>
    </template>
  </search-input>
</template>

<script>
import SearchInput from '@/features/SearchInput/ui/SearchInput.vue'
import MediaCard from '@/entities/media/ui/MediaCard.vue';
import { searchMedia } from '@/widgets/SearchBlock/api';

export default {
  components: { SearchInput, MediaCard },
  setup() {
    return { searchMedia }
  }
}
</script>

<style>

</style>