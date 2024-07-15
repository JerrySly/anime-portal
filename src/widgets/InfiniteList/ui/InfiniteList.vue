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
      <v-progress-circular
        v-if="loading"
        color="primary"
        indeterminate
        :size="61"
      />
      <p class="empty" v-if="!loading && items?.length">
        Not found any media
      </p>
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
      default: true,
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
.empty {
  
}
</style>