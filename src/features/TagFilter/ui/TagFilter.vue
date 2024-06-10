<template>
  <v-autocomplete 

  />

</template>

<script lang="ts">
import { useAppStore } from '@/shared/store';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const store = useAppStore();
    onMounted(() => {
      store.getAllTags();
    })

    return {
      tags: store.tags
    }
  }
})
</script>

<style lang="scss" scoped>

</style>