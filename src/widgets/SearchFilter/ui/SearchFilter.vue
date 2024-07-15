<template>
  <div class="search-filter">
    <tag-filter :start-value="filter.tags" @update:value="(value) => updateProp('tags', value)"/>
    <genre-select :start-value="filter.genres" @update:value="(value) => updateProp('genres', value)"/>
    <is-adult :start-value="filter.isAdult" @update:value="(value) => updateProp('isAdult', value)"/>
    <average-score-select
      :max-value="filter.averageScoreMax"
      :min-value="filter.averageScoreMin"
      @update:max:value="(value) => updateProp('averageScoreMax', value)"
      @update:min:value="(value) => updateProp('averageScoreMin', value)"
    />
    <v-btn
      color="primary"
      block
      @click="$emit('apply')"
    >
      Apply
    </v-btn>
  </div>
</template>

<script lang="ts">
import TagFilter from '@/features/TagFilter/ui/TagFilter.vue';
import GenreSelect from '@/features/GenreSelect/ui/GenreSelect.vue';
import { computed, defineComponent } from 'vue';
import IsAdult from '@/features/isAdult/ui/isAdult.vue';
import AverageScoreSelect from '@/features/AverageScroreSelect/ui/AverageScoreSelect.vue';
import { useMainStore } from '@/shared/store/main';

export default defineComponent({
  components: { TagFilter, GenreSelect, IsAdult, AverageScoreSelect },
  name: 'SearchFilter',
  emits: ['apply'],
  setup() {
    const store = useMainStore();
    const filter = computed(() => {
      return store.infiniteFilter;
    })
    return {
      filter,
      updateProp: store.SET_FILTER_PROP
    }
  }
})
</script>

<style lang="scss" scoped>
.search-filter {
  height: 100vh;
  position: sticky;
  top: 0px;
  background-color: #CCEFCC80;
  padding: 12px 20px;
}
</style>