<template>
  <div class="list">
    <div v-for="(item, index) in items" :key="index">
      <slot name="card" :item="item"/>
    </div>
    <div
    v-intersect="{
      handler: onIntersect,
      options: {
        threshold: [0, 0.5, 1.0]
        }
        }"
    />
    <div>
      <v-progress-circular color="primary" indeterminate :size="61"></v-progress-circular>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onIntersect: {
      type: Function,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    return {
      ...props
    }
  }
}
</script>

<style scoped lang="scss">

</style>