<template>
  <div class="classify">
    <header class="classify_header" v-show="isShow">
      <div class="left">
        <router-link to="/classify/type">
          <span>分类</span>
        </router-link>
      </div>
      <div class="right">
        <router-link to="/classify/brand">
          <span>品牌</span>
        </router-link>
      </div>
      <a href="javascript:;">
        <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png" alt="" class="sreach">
      </a>
    </header>
    <div class="main">
      <keep-alive>
        <router-view :classify="classify" :Show="Show"/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
       isShow:true
      }
    },
    methods:{
      Show(){
        this.isShow = !this.isShow
      }
    },
    mounted(){
      this.$store.dispatch('getClassify')
    },
    computed:{
      ...mapState(['classify'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .classify
    background #f3f4f5
    width 100%
    height 100%
    overflow hidden
    .classify_header
      padding: 0 15px;
      border-bottom: 1px solid #cbcbcb;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      height: 40px;
      z-index: 110;
      background white
      overflow hidden
      .sreach
        position absolute
        top: 13px;
        right: 15px;
        width: 14px;
        height: 14px;
      div
        width: 50%;
        height: 40px;
        line-height: 40px;
        float left
      .left
        text-align: right;
        padding-right: 5%;
      .right
        text-align: left ;
        padding-right: 5%;
      a
        span
          display: inline-block;
          height: 40px;
          padding: 0 4px;
          cursor: pointer;
      .active
        color red
        span
          border-bottom: 2px solid #ed4044;

    .main
      margin-top 43px
      width 100%
      height 100%
      overflow hidden
</style>
