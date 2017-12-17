<template>
  <div class="cat_foods">
    <div class="foods_wrapper">
      <div class="banner_item">
        <div class="block">
          <el-carousel height="150px"  v-if="cat_foods.datas">
            <el-carousel-item v-for="(pic,index) in cat_foods.datas[0].value" :key="index">
              <img :src="pic.image" alt="" class="swipe_img">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="tab_foods">
        <div class="food_tabs" v-if="cat_foods.datas">
          <ul>
            <li v-for="(food,index) in cat_foods.datas[1].data.categorys" :key="index"
                @click="toggle_tab(index)">
              <img :src="tabs_array[index]? food.image_choose:food.image" alt="">
            </li>
          </ul>
          <div class="food_list">
            <div class="food_item" v-for="(item,index) in cat_foods.datas[1].data.categorys[flag].small_cate.menus" :key="index">
              <a href="javascript:;">
                <img :src="item.image" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="xline"></div>
      <div class="currency_ad" v-if="cat_foods.datas">
        <div class="left">
          <img :src="cat_foods.datas[3].content_images[0][0].image" alt="">
        </div>
        <div class="right">
          <div class="top">
            <img :src="cat_foods.datas[3].content_images[1][0].image" alt="">
          </div>
          <div class="bottom">
            <img :src="cat_foods.datas[3].content_images[1][1].image" alt="">
          </div>
        </div>
      </div>
      <div class="food_activity" v-if="cat_foods.datas">
        <div>
          <img :src="cat_foods.datas[4].value.center.img.image" alt="">
        </div>
        <div class="goods" v-for="(goods,index) in cat_foods.datas[5].data.advAndGoods" :key="index">
          <div class="top">
            <img :src="goods.big_image.image" alt="" class="good_img">
          </div>
          <div class="bottom good_bottom" >
            <div class="good_wrapper">
              <div  v-for="(good,index) in goods.goods" :key="index" class="good_item">
                <a href="javascript:;">
                  <div class="good_img">
                    <img :src="good['small_image'].image" alt="">
                  </div>
                  <div class="text">
                    <p>{{good.subject}}</p>
                    <span>{{good.price}}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="food_classify" v-if="cat_foods.datas">
        <div class="food_title" ref="food_title">
          <div class="title_food" >
            <ul>
              <li v-for="(item,index) in cat_foods.datas[6].menus">
                <div class="pro-block">
                  <a href="javascript:;" :class="{active:tabColor_array[index]}" @click="changeFood(index)">{{item.menu_name}}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <ul class="list_libox">
          <li v-for="(list,index) in cat_foods.lists[foodClassify].data" :key="index">
              <div class="libox">
                <div class="box">
                  <img v-lazy="list.photo" alt="">
                </div>
                <div class="box_text">
                  <a href="javascript:;">
                    <h1>{{list.subject}}</h1>
                  </a>
                  <div class="box_line"></div>
                  <div class="text">
                    <span>¥{{list.sale_price}}</span>
                    <span class="s">{{list.dprice}}</span>
                  </div>
                  <div class="text2">{{list.comments}}      输出{{list.dprice}}</div>
                </div>
              </div>
              <div class="libox_shopcat">
                <img src="//static.epetbar.com/static_web/wap/src/images/addcart.png" alt="">
              </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        flag:0,
        tabs_array:[true,false,false,false],
        tabColor_array:[true,false,false,false,false],
        foodClassify:0
      }
    },
    mounted(){
      this.$nextTick(()=>{
        setTimeout(()=>{
          let wraps = document.getElementsByClassName('good_bottom')
          new BScroll(wraps[0],{
            scrollX:true
          })
          new BScroll(wraps[1],{
            scrollX:true
          })
          new BScroll(this.$refs['food_title'],{
            scrollX:true
          })
        },3000)
      })
    },
    methods:{
      toggle_tab(index){
        this.flag = index
        this.tabs_array = this.tabs_array.map(()=>{
          return false
        })
        this.tabs_array[index] = true
      },
      changeFood(index){
        this.tabColor_array = this.tabColor_array.map(()=>{
          return false
        })
        this.tabColor_array[index] = true
        this.foodClassify=index
      }
    },
    computed:{
      ...mapState(['cat_foods'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cat_foods
    position absolute
    .tab_foods
      width 100%
      .food_tabs
        width 100%
        ul
          overflow hidden
          width 100%
          li
            float left
            width 25%
            img
              width 100%

        .food_list
          overflow hidden
          width 100%
          .food_item
            width 33.3333%
            float left
            img
              width 100%
    .currency_ad
      width 100%
      .right
        float right
        width 50%
        .top
          width 100%
          img
            width 100%
            height 50%
        .bottom
          float left
          width 100%
          img
            width 100%
            height 50%
      .left
        display inline-block
        width 50%
        img
          width 100%

    .food_activity
      width 100%
      margin 10px 0px
      .goods
        width 100%
        .top
          width 100%
          .good_img
            width 100%
        .bottom
          overflow hidden
          padding-left 5px
          width 100%
          .good_wrapper
            overflow hidden
            width 200%
          .good_item
            float left
            padding-right: 5px;
            padding-bottom 10px
            padding-top: 5px;
            margin-right 5px
            width 108px
            a
              width 100%
              .good_img
                margin 10px
                width 100%
              img
                width 100%
              .text
                text-align center
                font-size 12px
                p
                  width: 100%;
                  height: 32px;
                  line-height: 16px;
                  overflow hidden
                  margin-bottom: 5px;
                span
                  color #e35356
                  font-size: 14px;

      >div
        width 50%
        margin 10px auto
        >img
          max-width: 100%;
          max-height: 73px;

    .food_classify
      width 100%
      .food_title
        width 100%
        .title_food
          width 130%
          ul
            overflow hidden
            padding-bottom: 10px
            li
              float left
              width: 93.3px;
              padding 5px
              .pro-block
                width 100%
                text-align center
                padding 0 5px
                a
                  font-size 12px
                  display: block;
                  width 100%
                  border-radius 10px
                  padding 5px
                  background: #f5f5f5;
                  &.active
                    color: #e35356;
                    border: 1px solid #e35356;

      .list_libox
        min-height: 623px;
        font-size: 14px;
        li
          border-bottom: 1px solid #e7e7e7;
          padding: 10px;
          position relative
          .libox
            position relative
            .box
              position relative
              width 100px
              height 100px
              img
                position absolute
                left 0
                top 0
                bottom 0
                right 0
                width 100%
                height 100%
            .box_text
              position absolute
              top 0
              right 0
              left 40%
              a
                h1
                  height: 32px;
                  overflow: hidden;
                  font-size: 14px;
                  line-height: 16px;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
              .box_line
                height 25px
                margin-top: 5px
              .text
                margin-bottom 10px
                span
                  color: #e35356
                  font-size: 15px;
                  font-weight: 700;
                .s
                  color: #666
                  font-size: 12px;
                  margin-left: 5px;
                  text-decoration line-through
              .text2
                color: #999;
                font-size: 12px;
          .libox_shopcat
            position: absolute;
            bottom: 12px;
            right: 10px;
            width: 25px;
            z-index: 0;
            img
              width 100%
              vertical-align: middle;
    .banner_item
      position relative
      overflow hidden
      width 100%
      .swipe_img
        width 100%;
        height 100%;
</style>
