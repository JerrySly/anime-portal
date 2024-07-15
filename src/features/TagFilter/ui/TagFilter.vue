<template>
  <v-autocomplete
    :v-model="selectedTags"
    :items="tags"
    item-title="name"
    return-object
    label="Media tags"
    multiple
    @update:model-value="(value) => $emit('update:value', value)"
  >
    <template v-slot:chip="{ props, item }">
      <v-chip
        v-bind="props"
        :text="item.raw.name"
        closable
        close-icon="mdi-close-circle"
      />
    </template>
    <template v-slot:item="{ props, item }">
      <v-list-item
        v-bind="props"
        :title="item.raw.name"
      ></v-list-item>
    </template>
  </v-autocomplete>

</template>

<script lang="ts">
import { useAppStore } from '@/shared/store';
import { computed, defineComponent, onMounted, toRefs } from 'vue';
import {selectedTags} from '../model';
import { PropType,} from 'vue';
import { MediaTag } from "@/shared/__generated__/graphql";


export default defineComponent({
  emits: ['update:value'],
  props: {
    startValue: {
      type: Array as PropType<MediaTag[]>,
      default: () => [],
    }
  },
  setup(props) {
    const store = useAppStore();
    const { startValue } = toRefs(props);
    
    
    onMounted(() => {
      store.getAllTags().then(() => {
        if (startValue && startValue.value?.length) {
          console.log(tags.value?.length);
          selectedTags.value = startValue.value; 
        }
      })
    })

    const tags = computed(() => {
      return store.tags;
    })

    return {
      selectedTags,
      tags: tags,
    }
  }
})
</script>

<style lang="scss" scoped>

</style>