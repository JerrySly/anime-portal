<template>
  <v-autocomplete
    :v-model:search="searchText"
    :items="autocompleteItems?.slice(0, 10)"
    item-title="props.title.userPreferred"
    variant="outlined"
    label="Write manga or anime name" 
    color="primary"
    no-filter
    item-props
    hide-no-data
    :menu-props="{
      maxHeight: 300,
      maxWidth: 300,
      closeOnContentClick: false,
      scrollStrategy: 'block',
      contentClass: ''
    }"
    @update:search="(search) => debouncedSearch(search)"
  >
  <template #item="{ item }">
    <div class="ml-2 pa-2">
      <recommended-search-media :img="item.props?.coverImage?.medium" :title="item.props?.value.title" :description="item.props.description"/>
    </div>
  </template>
  </v-autocomplete>
</template>

<script lang="ts">
import { autocompleteItems, loadingState, searchText } from '../model';
import { debouncedSearch } from '../lib';
import RecommendedSearchMedia from '@/entities/media/ui/RecommendedSearchMedia.vue';
export default {
  components: { RecommendedSearchMedia },
  setup() {
    console.log(autocompleteItems);
    return {autocompleteItems, debouncedSearch, loadingState, searchText}
  }
}
</script>

<style lang="scss" scoped>

</style>