<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <ele_footer/>
  </div>
</template>

<script>
  import Header from './components/header/header.vue'
  import Footer from './components/footer/footer.vue'
  export default {
    components: {
      'ele_header':Header,
      'ele_footer':Footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
