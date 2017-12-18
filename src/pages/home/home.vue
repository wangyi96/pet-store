<template>
  <div class="home">
    <ele_header :header="header" :change="change"/>
    <div class="home_wrapper" ref="home_wrapper" v-show="mask_array[0].code==0">
      <div class="home_container">
        <div class="banner_item">
          <div class="block">
            <el-carousel height="150px"  v-if="this.header.datas">
              <el-carousel-item v-for="(pic,index) in header.datas[0].value" :key="index">
                <img :src="pic.image" alt="" class="swipe_img">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="main_wrap">
          <div class="columnnavdiv">
            <ul v-if="this.header.datas">
              <li v-for="(menu,index) in header.datas[1].menus">
                <a href="javascript:;">
                  <img :src="menu.image" alt="">
                </a>
              </li>
            </ul>
          </div>
          <div class="xline"></div>
          <div class="surprise_day">
            <div class="surprise">
              <div class="surprise_top">
                <div class="logo">
                  <img src="//static.epetbar.com/static_web/wap/src/images/suprice.png" alt="">
                </div>
                <div class="text">距本场结束</div>
                <div class="time">
                  <span class="span_border">00</span>
                  <span>:</span>
                  <span class="span_border">00</span>
                  <span>:</span>
                  <span class="span_border">00</span>
                </div>
                <div class="more">
                  <a href="javascript:;">
                    <img src="https://img2.epetbar.com/nowater/2016-10/26/20/c6b7ac04e8c6cb827365c17bd74aef59.png" alt="">
                  </a>
                </div>
              </div>
              <div class="surprise_bottom" ref="surprise_bottom">
                <div class="surprise_wrap">
                  <div class="surprise_container" v-if="surprise_day.data">
                    <div v-for="(good,index) in surprise_day.data['27'].goods" :key="index" class="good">
                      <a href="javascript:;">
                        <div>
                          <img :src="good.image.image" alt="">
                        </div>
                        <div class="text">
                          <span>¥</span>
                          <span>{{good.sale_price}}</span>
                        </div>
                        <p>{{good.little_price}}</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="xline"></div>
          <div class="currency">
            <div>
              <img src="" alt="">
            </div>
          </div>
          <div class="xline"></div>
          <div class="currency_ad">
            <div class="left">
              <img src="https://img2.epetbar.com/nowater/2017-12/14/19/5a2a1a99f5642f160f4d22ee3cb7ee8a.jpg@!water" alt="">
            </div>
            <div class="right">
              <div class="top">
                <img src="https://img2.epetbar.com/nowater/2017-12/13/09/e785855e80fd229d424d9ce15d7d7666.jpg@!water" alt="">
              </div>
              <div class="bottom">
                <img src="https://img2.epetbar.com/nowater/2017-12/13/09/5d685158ea5f5eb8b707dad905384aa6.jpg@!water" alt="">
              </div>
            </div>
          </div>
          <div class="xline"></div>
          <div class="video">
            <div class="video_top">
              <img class="left" src="https://img2.epetbar.com/nowater/2017-12/13/16/2b2ca7c9270d99cab79cc9a7b8b42399.jpg" alt="">
              <div class="right">
                <a href="javascript:;">
                  <img src="https://img2.epetbar.com/nowater/2017-12/13/11/f58b605d8d9b1900944a7b3a4ce12eb1.jpg" alt="">
                </a>
              </div>
            </div>
            <div class="video_middle">
              <img src="https://img1.epetbar.com/2017-12/14/15/94de9a1a616ed0aa647be3f133d85f78.jpg@!500w0h" alt="">
            </div>
            <div class="video_bottom">
              <p>狮王 猫咪去毛喷剂  防静电 防打结 梳毛轻松</p>
              <div v-if="header.datas">
                <span class="eye"></span>
                <span>{{header.datas[10].value[0].visit}}</span>
                <span class="line">|</span>
                <span>{{header.datas[10].value[0].time}}</span>
              </div>
            </div>
          </div>
          <div class="xline"></div>
          <div class="brand">
            <div class="brand_top">
              <img class="left" src="https://img2.epetbar.com/nowater/2017-12/13/16/70adf3f7cc4cbe58a7dc4865c4b4f932.jpg" alt="">
              <div class="right">
                <a href="javascript:;">
                  <img src="https://img2.epetbar.com/nowater/2017-12/13/17/e9aea7ada15165227f1bfb15ba530875.jpg" alt="">
                </a>
              </div>
            </div>
            <div v-for="(img,index) in 6":key="index">
              <div class="brand_img">
                <img src="https://img2.epetbar.com/nowater/2017-12/13/21/f9b03b752970c2c957877a4c6eabf206.jpg@!water" alt="">
              </div>
              <div class="xline"></div>
            </div>
          </div>
          <div class="experience">
            <div class="experience_top">
              <img class="left" src="https://img2.epetbar.com/nowater/2017-12/13/16/0954d3cd070051587d8f4d6af79882aa.jpg" alt="">
              <div class="right">
                <a href="javascript:;">
                  <img src="https://img2.epetbar.com/nowater/2017-12/13/13/5cfcbe65444cb2ce687118f8dc0ceca2.jpg" alt="">
                </a>
              </div>
            </div>
            <div class="experience_item">
              <div class="block">
                <el-carousel height="150px"  v-if="this.header.datas">
                  <el-carousel-item v-for="(pic,index) in this.header.datas[28].value" :key="index">
                    <img :src="pic.image" alt="" class="swipe_img">
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
          <div class="xline"></div>
          <div class="theatre" v-if="header.datas">
            <div class="theatre_top">
              <img class="left" src="https://img2.epetbar.com/nowater/2017-12/13/16/ef5a8dee1393526fed2afe5059fb8c58.jpg" alt="">
              <div class="right">
                <a href="javascript:;">
                  <img src="https://img2.epetbar.com/nowater/2017-12/13/16/415c0eb8c9b2726d51aad24fc3e76939.jpg" alt="">
                </a>
              </div>
            </div>
            <div class="theatre_middle">
              <img :src="header.datas[34].value[0].cover.image" alt="">
            </div>
            <div class="theatre_bottom">
              <p>{{header.datas[34].value[0].title}}</p>
              <div>
                <span class="eye"></span>
                <span>{{header.datas[34].value[0].visit}}</span>
                <span class="line">|</span>
                <span>{{header.datas[34].value[0].time}}</span>
              </div>
            </div>
          </div>
          <div class="xline"></div>
          <div class="divimg">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/16/2b4302241c921a29523ce43d465cd28d.jpg@!water" alt="">
          </div>
          <div class="wap-footer-bar">
            <div class="home_footer">
              <div class="ft">
                <span class="bt" title="触屏版">触屏版</span>
                <span><a href="https://wap.epet.com/app.html">手机客户端</a></span>
                <span><a href="https://wap.epet.com/AboutEpet.html">关于我们</a></span>
                <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
              </div>
              <div style="text-align:center;margin:0 10px 0 10px; padding-bottom:25px; font-size:12px" class="c">&copy; wap.epet.com 版权：重庆易宠科技有限公司</div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="tab_mask_0" v-show="mask_array[1].code==0" ref="tab_mask_0">
      <keep-alive>
        <CatFoods/>
      </keep-alive>
    </div>
    <div class="tab_mask_1" v-show="mask_array[2].code==0">
      closs1.......
    </div>
  </div>
</template>

<script>
  import Header from '../../components/header/header.vue'
  import CatFoods from '../../components/catfoods/catfoods.vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    data(){
      return{
        mask_array:[
          {code:0},
          {code:1},
          {code:1},
          {code:1},
          {code:1},
        ]
      }
    },
    methods:{
      change(index){
//        console.log(index);
        this.mask_array.forEach(value =>{
          value.code = 1
        })
//        console.log(this.mask_array);
        this.mask_array[index].code = 0
      }
    },
    mounted(){
      this.$store.dispatch('getHeader')
      this.$store.dispatch('getSurprise')

      this.$nextTick(()=>{
        new BScroll(this.$refs.home_wrapper)
      })
      this.$nextTick(()=>{
        new BScroll(this.$refs.surprise_bottom,{
          scrollX:true
        })
      })
      this.$nextTick(()=>{
        new BScroll(this.$refs.tab_mask_0,{
          click:true,
        })
      })
    },
    computed:{
      ...mapState(['header','surprise_day'])
    },

    components: {
      'ele_header':Header,
      CatFoods
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    position relative
    width 100%
    height 100%
    .home_wrapper
      position absolute
      top 86px;
      left 0
      right 0
      bottom 45px
      overflow hidden
      .home_container
        position absolute
        top 0
        .main_wrap
          .columnnavdiv
            overflow hidden
            ul
              overflow hidden
              position relative
              li
                width: 20%;
                float left
                img
                  display block
                  width 100%
          .surprise_day
            .surprise
              width 100%
              padding 10px
              .surprise_top
                overflow hidden
                position relative
                .logo
                  float left
                  img
                    height: 24px;
                    margin-left: -20px;
                .text
                  float left
                  margin-top 2px
                .time
                  float: left;
                  margin-left 5px
                  margin-top 2px
                  span.span_border
                    border 1px solid #ddd
                    padding 1px 2px
                    font-size 13px
                .more
                  position absolute
                  top: -9px;
                  right: -8px;
                  a
                    width 50%
                    display block
                    float right
                    img
                      width 100%
              .surprise_bottom
                overflow hidden
                .surprise_wrap
                  width 120%
                  .surprise_container
                    width 100%
                    padding-left: 5px;
                    margin-bottom: 10px;
                    overflow hidden
                    .good
                      float left
                      margin-right 10px
                      img
                        width 84px
                      .text
                        text-align center
                        color red
                      p
                        color: #999
                        font-size: 12px
                        text-align center
          .currency
            width 100%
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

          .video
            .video_top
              position relative
              width 100%
              .left
                max-width: 50%;
                max-height: 73px;
                margin: 0 auto 0 10px;
              .right
                position absolute
                text-align: right;
                right: 0;
                top: 5px;
                img
                  width 50%
            .video_middle
              img
                width 100%
            .video_bottom
              padding 10px
              p
                text-align center
                color: #333
                font-size 12px
                margin-bottom 5px
              div
                text-align center
                color: #999
                font-size: 12px;
                .line
                  margin 0 5px
                .eye
                  display inline-block
                  width 10px
                  height 9px
                  background url("https://static.epetbar.com/static_web/wap/dist/images/views-gray.png") no-repeat
                  background-size 100% 100%
          .brand
            .brand_top
              position relative
              width 100%
              .left
                max-width: 50%;
                max-height: 73px;
                margin: 0 auto 0 10px;
              .right
                position absolute
                text-align: right;
                right: 0;
                top: 5px;
                img
                  width 50%
            .brand_img
              img
                width 100%
          .experience
            .experience_top
              position relative
              width 100%
              .left
                max-width: 50%;
                max-height: 73px;
                margin: 0 auto 0 10px;
              .right
                position absolute
                text-align: right;
                right: 0;
                top: 5px;
                img
                  width 50%
            .experience_item
              .swipe_img
                width 100%
          .theatre
            .theatre_top
              position relative
              width 100%
              .left
                max-width: 50%;
                max-height: 73px;
                margin: 0 auto 0 10px;
              .right
                position absolute
                text-align: right;
                right: 0;
                top: 5px;
                img
                  width 50%
            .theatre_middle
              img
                width 100%
            .theatre_bottom
              padding 10px
              p
                text-align center
                color: #333
                font-size 12px
                margin-bottom 5px
              div
                text-align center
                color: #999
                font-size: 12px;
                .line
                  margin 0 5px
                .eye
                  display inline-block
                  width 10px
                  height 9px
                  background url("https://static.epetbar.com/static_web/wap/dist/images/views-gray.png") no-repeat
                  background-size 100% 100%
          .divimg
            img
              width 100%
          .wap-footer-bar
            width 100%
            .home_footer
              margin-top 14px
            .ft
              font-size 14px
              padding: 15px 0 5px;
              text-align center
              .bt
                color red
            .c
              text-align: center;
              margin: 0 10px 0 10px;
              padding-bottom: 25px;
              font-size: 12px;
        .banner_item
          position relative
          overflow hidden
          width 100%
          .swipe_img
            width 100%;
            height 100%;
    .tab_mask_0
      position absolute
      top 86px;
      left 0
      right 0
      bottom 45px
      overflow hidden
    .tab_mask_1
      position absolute
      left 0
      top 86px
      right 0
      bottom 45px
      background pink
</style>
