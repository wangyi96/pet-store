<template>
  <div class="userCenter">
    <div class="userhead">
      <div class="head_top">
        <a href="javascript:;" class="close"></a>
        <a href="https://wap.epet.com/register.html" class="reg">注册</a>
      </div>
      <div class="epet">
        <img src="//static.epetbar.com/mpet/images/login/logo.png" alt="">
      </div>
      <div class="head_bottom">
        <div class="login">
          <router-link to="/userCenter/login">
              普通登录
              <span></span>
          </router-link>

        </div>

        <div class="register">
          <router-link to="/userCenter/register">
              手机动态密码登录
              <span class="san"></span>
          </router-link>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>

    <div class="wjmm">
      <a href="javascript:;">忘记密码？</a>
    </div>

    <div class="button" @click="login">
      <a href="javascript:;">
        登录
      </a>
    </div>

    <div style="height:10em"></div>

    <div class="other-login">
      <div class="other_title">
        <span>合作网站登录</span>
      </div>
      <div class="other_main">
        <div>
          <ul>
            <li><a href="https://passport.epet.com/Oauth.html?type=4&amp;returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html"><img src="//static.epetbar.com/mpet/images/login/login_ico4.png"></a></li>
            <li><a href="https://passport.epet.com/Oauth.html?type=2&amp;returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html"><img src="//static.epetbar.com/mpet/images/login/login_ico2.png"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  export default {
    data(){
      return{
        isShow:true,
        verify:'',
        phone:''
      }
    },
    mounted(){
      PubSub.subscribe('code',(msg,data) => {
        this.verify = data
      })
      PubSub.subscribe('phone',(msg,data) => {
        this.phone = data
      })
    },
    methods:{
      toggle(){
        this.isShow = !this.isShow
      },
      login(){
        let url = `http://localhost:3000/sendcode?phone=${this.phone}`
        axios.get(url)
          .then((response)=>{
          console.log(response);
        })

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .userCenter
    width 100%
    height 100%
    padding-bottom: 45px;
    .userhead
      width 100%
      background: url('https://img1.epetbar.com/2017-09/21/11/2ac7b0a4f0ab1e4a63819e0668d1cb39.png') no-repeat;
      background-size: 100% 100%;
      .head_top
        height: 50px;
        line-height: 50px;
        position: relative;
        padding 0 12px
        .close
          background: url('https://static.epetbar.com/mpet/images/personal-bico3.png') no-repeat;
          background-size: 12px 17px;
          display: block;
          width: 22px;
          height: 20px;
          position: absolute;
          margin-top: 16px;
        .reg
          position: absolute;
          right 10px
          color white
      .epet
        padding 12px 0 24px 0
        text-align center
        img
          width 20%
      .head_bottom
        overflow hidden
        width 100%
        background rgba(255,255,255,0.3);
        div
          float: left;
          width: 50%;
          text-align: center;
          height: 44px;
          line-height: 44px;
          position: relative;
          a
            font-size: 15px;
            color: #fff;
          .active
            >span
              display block
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #fff;
              position: absolute;
              bottom: 0px;
              left: 0;
              right: 0;
              margin: auto;


    .wjmm
      padding-left: 2em;
      padding-right: 2em;
      overflow hidden
      a
        float right
        font-size: 14px;
        color: #898989
    .button
      padding-top: 0.5em;
      a
        margin:0 4%
        display: block;
        letter-spacing: 5px;
        border-radius: 5px;
        background: #2ec975;
        font-size: 15px;
        padding: .6em 0;
        text-align: center;
        color: #fff;
    .other-login
      .other_title
        text-align center
        color: #d7d7d7;
        margin-top: 0.5em;
      .other_main
        padding: 1.5em 0;
        text-align center
        div
          display inline-block
          ul
            overflow hidden
            text-align center
            li
              width: 50%;
              padding: 0 1em;
              float: left;
              display: inline;
              img
                width: 50%;
                height: auto;
                display: block;
                margin: auto;
                max-width: 176px;
</style>
