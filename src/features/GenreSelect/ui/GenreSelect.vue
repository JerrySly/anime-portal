<template>
  <v-select
    v-model="selectedGenres"
    label="Genres"
    :items="genres"
    multiple
    @update:model-value="(value) => $emit('update:value', value)"
  />
</template>

<script lang="ts">
import { useAppStore } from "@/shared/store";
import { computed, defineComponent, onMounted, PropType, toRefs } from "vue";
import {selectedGenres} from '../model'

export default defineComponent({
  name: 'GenreSelect',
  emits: ['update:value'],
  props: {
    startValue: {
      type: Array as PropType<string[]>,
      default: () => [],
    }
  },
  setup(props) {
    const store = useAppStore();
    const { startValue } = toRefs(props);

    onMounted(() => {
      store.getAllGenres();
      if (startValue && startValue.value?.length) {
        selectedGenres.value = startValue.value; 
      }
    })
    const genres = computed(() => {
      return store.genres;
    })
    
    return {
      selectedGenres,
      genres,
    }
  },
})
</script>

<style lang="scss" scoped>

</style>