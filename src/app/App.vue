
<template>
  <NavHeader />
  <router-view />
</template>
<script>
import NavHeader from '@/widgets/Header/ui/NavHeader.vue';
export default {
  components: {
    NavHeader,
  }
}
</script>
<style lang="scss">
@import '../shared/styles/index.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
