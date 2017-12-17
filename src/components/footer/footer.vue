<template>
  <div class="footer">
    <ul>
      <li>
        <router-link to="/home" class="first"/>
      </li>
      <li>
        <router-link to="/classify" class="two"/>
      </li>
      <li>
        <router-link to="/showCat" class="three"/>
      </li>
      <li>
        <router-link to="/userCenter" class="four"/>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    position fixed
    bottom 0
    width 100%
    height 45px
    background white
    z-index 100
    ul
      height: 45px;
      line-height: 45px;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 103;
      border-top: 1px solid #e7e7e7;
      li
        float: left;
        width: 25%;
        height: 55px;
        a
          background url(./img.png) no-repeat
          background-size: 234px 163px;
          display block
          margin: 0 auto;
          height: 40px;
          width: 42px;
          margin-top: 2px;
          &.first
            background-position: -85px 0
          &.two
            background-position: -85px -41px;
          &.three
            background-position: -85px -81px;
          &.four
            background-position: -85px -122px;
          &.active.first
            background-position: -42px 0;
          &.active.two
            background-position: -42px -40px;
          &.active.three
            background-position: -42px -80px;
          &.active.four
            background-position: -42px -120px;


</style>
