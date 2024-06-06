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
    @update:search="(search) => debouncedSearch(search, loadFunc)"
  >
  <template #item="{ item }">
    <slot name="item-block" :item="item">
    </slot>
  </template>
  </v-autocomplete>
</template>

<script lang="ts">
import { autocompleteItems, loadingState, searchText } from '../model';
import { debouncedSearch } from '../lib';
export default {
  props: {
    loadFunc: {
      type: Function,
      default: () => null,
    }
  },
  setup(props: any, { expose }: any) {
    expose({debouncedSearch})
    return {...props, autocompleteItems, debouncedSearch, loadingState, searchText}
  }
}
</script>

<style lang="scss" scoped>

</style>