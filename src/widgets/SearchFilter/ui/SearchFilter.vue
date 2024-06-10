<template>
  <div>
    <tag-filter />
  </div>
</template>

<script lang="ts">
import TagFilter from '@/features/TagFilter/ui/TagFilter.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { TagFilter },
  name: 'SearchFilter',
})
</script>

<style lang="scss" scoped>

</style>