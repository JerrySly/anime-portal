<template>
  <div class="feed">
    <div class="feed__search">
      <search-block />
    </div>
  </div>
</template>

<script>
import SearchBlock from '@/widgets/SearchBlock/ui/SearchBlock.vue'
export default {
  components: { SearchBlock },

}
</script>

<style lang="scss" scoped>
.feed {
  &__search {
    margin: auto;
    width: 70%;
    margin-top: 50px;
  }
}

</style>