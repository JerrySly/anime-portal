<template>
  <div class="list">
    <slot />
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