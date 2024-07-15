<template>
  <v-switch
    v-model="value"
    color="primary"
    label="Add adult"
    @update:model-value="(value) => $emit('update:value', value)"
  />
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch } from "vue";
import { value } from '../model';

export default defineComponent({
  emits: ['update:value'],
  props: {
    startValue: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const {startValue} = toRefs(props);
    value.value = startValue.value;
    return {
      value,
    }
  }
})
</script>

<style lang="scss" scoped>

</style>