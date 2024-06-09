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
    >
      
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