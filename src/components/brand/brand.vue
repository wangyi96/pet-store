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
                      <img :src="brand.logo" alt="">
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
   </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      classify:Object
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



</style>
