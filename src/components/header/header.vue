<template>
  <div class="indexheader">
    <div class="indexnavcon">
      <div class="headerbox">
        <div class="main">
          <div class="main_wrapper">
            <div class="search bgf">
              <div class="header_location">
                <a href="javascript:;">
                  <span class="catordog c89">{{currenttype}}</span>
                  <span class="c89">|</span>
                  <span data-name="my-place" class="myposition c89 ft13">重庆</span>
                  <i class="header_i"></i>
                </a>
              </div>
              <p class="search-text">
                <input type="search" placeholder="搜索商品和品牌" disabled="">
                <span class="eico serach-ico"></span>
              </p>
              <a href='javascript:;' class="epet-category">
                <img class="msg_img" src="./mydope.png">
              </a>
            </div>
          </div>
          <div class="find_nav">
            <div class="nav_item"  ref="nav_item">
              <div class="nav">
                <ul>
                  <li v-for="(menu,index) in this.header.menus">
                    <a href="javascript:;" @click="toggleShow(index)">{{menu.menu_name}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/header/header.vue'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        currenttype:'猫猫站',
        isShow:false
      }
    },
    methods:{
      toggleShow(index){
        this.change(index)
      },

    },
    props:{
      header:Object,
      change:Function
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll(this.$refs.nav_item,{
          scrollX:true,
          click:true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .indexheader
    position fixed
    width 100%
    background white
    z-index 100
    .indexnavcon
      height: 86px;
      .main
        /*max-width: 640px;*/
        margin: auto;
        .main_wrapper
          padding: 5px 10px
          .search
            padding: 8px 0;
            background: #fff;
            text-align: center;
            display: flex;
            -webkit-box-align: center;
            display: -moz-box;
            -moz-box-align: center;
            width: 100%;
            .header_location
              position relative
              font-size 14px
              margin-right: 20px;
              display flex
              align-items center
              .header_i
                position: absolute;
                top: 10px;
                right: -11px;
                border-width: 4px;
                font-size: 0;
                line-height: 0;
                border-style: solid solid dotted;
                border-color: #898989 transparent transparent;
            .search-text
              position relative
              flex 1
              input
                width: 100%;
                border: 0;
                height: 25px;
                background: #e9e9e9;
                border-radius: 4px;
                color: #bcbcbc;
                text-indent: 10px;
                font-size: 13px;
                outline: 0;
            .epet-category
              text-align center
              .msg_img
                width: 25px;
                margin-left: 10px;
        .find_nav
          width: 100%;
          height: 35px;
          min-width: 320px;
          overflow hidden
          .nav_item
            width 100%
            .nav
              width 150%
              ul
                overflow hidden
                li
                  width: 74.5px;
                  float: left
                  a
                    display: block;
                    width: 100%;
                    height: 100%;
                    line-height: 36px;
                    font-size: 14px;
                    text-align: center;
                    color: #666;



</style>
