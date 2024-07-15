<template>
  <div class="scores">
    <label>Average score</label>
    <div class="scores__line">
      <v-number-input
        label="Greater"
        :max="maxLimit"
        :step="1"
        :min="minLimit"
        v-model="min"
        control-variant="split"
        @update:model-value="(value) => $emit('update:min:value', value)"
      />
      <v-number-input
      label="Less"
      :max="maxLimit"
      :step="1"
      :min="minLimit"
      control-variant="split"
      v-model="max"
      @update:model-value="(value) => $emit('update:max:value', value)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs } from "vue";
import {min, max} from '../model'

export default defineComponent({
  name: 'AverageScoreSelect',
  emits: ['update:max:value', 'update:min:value'],
  props: {
    maxLimit: {
      type: Number,
      default: 5,
    },
    minLimit: {
      type: Number,
      default: 0,
    },
    maxValue: {
      type: Number,
      default: 5,
    },
    minValue: {
      type: Number,
      default: 0,
    }
  },
  setup(props) {
    const {maxValue, minValue} = toRefs(props);
    onMounted(() => {
      max.value = maxValue.value;
      min.value = minValue.value;
    })
    return {
      max,
      min,
    }
  }

})
</script>

<style lang="scss" scoped>
.scores {
  text-align: left;
  label {
    font-size: 18px;
  } 
  &__line {
    margin-top: 10px;
    display: flex;
    gap: 10px;
  }
}
</style>