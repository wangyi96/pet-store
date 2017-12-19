<template>
  <div class="brand">
   <div class="tab2" >
     <div class="brand_wrapper" ref="brandWrapper">
       <div>
         <div class="brand_inner" v-for="(brands,index) in classify.brand">
           <div class="brand_title">
             <span>——{{brands.title}}——</span>
           </div>
           <div class="list">
              <ul>
                <li v-for="(brand,index) in brands.list">
                  <a href="javascript:;">
                    <div class="img_box">
                      <img v-lazy="brand.logo" alt="">
                    </div>
                    <p>{{brand.name}}</p>
                    <p>{{brand.address}}</p>
                  </a>
                </li>
              </ul>
           </div>
         </div>
       </div>
     </div>
     <div class="showAll" v-show="!isShow">
       <a href="javascript:;" @click="showAll">全部</a>
     </div>
     <div class="brand_mask" v-show="isShow">
        <div class="mask_head">
          <div class="head_wrap">
            <div class="head_text">
              <a href="javascrippt:;" @click="showAll"></a>
              <span>全部品牌</span>
            </div>
          </div>
        </div>
        <div class="mask_main">
          <mt-index-list :show-indicator="false">
            <mt-index-section :index="items.order" v-for="(items,index) in classify.Allbrand">
              <div v-for="(item,index) in items.list" class="item">
                <a href="javascript:;">
                  <div class="item_wrap">
                    <div class="left">
                      <img :src="item.logo" alt="">
                    </div>
                    <div class="right">
                      <p class="ft14">{{item.name}}</p>
                      <p class="ft12 c999">{{item.address}}</p>
                    </div>
                  </div>
                </a>
              </div>
            </mt-index-section>
          </mt-index-list>
        </div>
     </div>
   </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      showAll(){
        this.isShow =!this.isShow
        this.Show()
      }
    },
    props:{
      classify:Object,
      Show:Function
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll(this.$refs['brandWrapper'])
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brand
    width 100%
    height 100%
    padding-bottom: 45px;
    .tab2
      width 100%
      height 100%
      .showAll
        a
          position: fixed;
          right: 6px;
          bottom: 65px;
          width: 40px;
          height: 40px;
          z-index: 10;
          background: rgba(0,0,0,.4);
          line-height: 40px;
          border-radius: 50%;
          font-size: 12px;
          color #fff
          text-align center
      .brand_wrapper
        height 100%
        padding-bottom: 45px;
        margin-bottom: 10px;
        background: #fff;
        font-size 14px
        overflow hidden
        >div
          padding-bottom: 45px;
        .brand_title
          padding-top: 20px
          color: #999
          font-size: 12px
          text-align center
        .list
          padding: 0 5px;
          overflow hidden
          ul
            overflow hidden
            li
              margin-top: 20px;
              width: 33.33%;
              float left
              padding: 0 5px
              position: relative
              p
                height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align center
              .img_box
                border: 1px solid #e2e2e2;
                text-align: center;
                padding: 50px 10px 10px;
                img
                  position absolute
                  max-width: 90%;
                  margin: 10px auto 0;
                  height: 40px;
                  right: 0;
                  top: 0;
                  left: 0;



      .brand_mask
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        width 100%
        height 100%
        background white
        .mask_head
          .head_wrap
            height: 50px;
            line-height: 50px;
            position: relative;
            padding: 0 10px;
            border-bottom: 1px solid #f3f3f3;
            background white
            font-size 15px
            .head_text
              a
                background: url('../footer/img.png') no-repeat;
                background-size: 234px 159px;
                height: 18px;
                width: 11px;
                background-position: -201px -10px;
                position: absolute;
                margin-top: 15px;
                left: 10px;
              span
                text-align center
                width: 90%
                text-overflow: ellipsis
                white-space: nowrap
                overflow: hidden
                display: block
                margin: 0 auto
        .mask_main
          .mint-indexlist-nav
            border 0
          .item
            .item_wrap
              padding: 10px;
              border-bottom: 1px solid #f3f4f5;
              margin-right: 20px;
              overflow hidden
              .left
                float: left;
                width: 30%;
                max-width: 150px;
                height: 50px;
                border: 1px solid #f3f4f5;
                padding-top: 50px;
                position relative
                img
                  max-width: 90%;
                  height: 40px;
                  margin: 5px auto;
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
              .right
                float: left;
                margin: 5px 0 5px 20px;
                .ft14
                  font-size 14px
                  color: #333
                  margin-bottom 5px
                .ft12
                  font-size 12px
                  color: #999;
</style>
