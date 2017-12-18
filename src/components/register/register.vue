<template>
  <div class="register">
    <div class="register_wrap">
      <form method="post" id="register_form" action="">
        <div>
          <ul>
            <li>
              <span class="mNumIco"></span>
              <input v-model="phone" type="text" placeholder="已注册的手机号" class="dttext" name="phone" id="bdphone">
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input v-model="verify" type="text" placeholder="请输入图片内容" class="dttext">
              <span id="v_container" style="width: 80px;height: 35px;" class="map_span"></span>
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="text" class="dttext" placeholder="动态密码" style="padding-right:8.5em;">
              <a href="javascript:;" class="getPwd">动态获取密码</a>
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    data(){
      return {
        verify:"",
        phone:""
      }
    },
    mounted(){
      new GVerify("v_container");

    },
    watch:{
      verify(){
        PubSub.publish('code',this.verify)
      },
      phone(){
        PubSub.publish('phone',this.phone)
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .register
    width 100%
    .register_wrap
      background: #fff;
      border-radius: 0.5em;
      margin: 0em 4% 1em 4%;
      padding: 0 1.6%;
      ul
        li
          border-bottom: #e2e2e2 solid 1px;
          padding: 12px 0 12px 30px;
          position: relative;
          .map_span
            display: block;
            position: absolute;
            top: 5px;
            right: 0;
          .getPwd
            background: #fff;
            color: #ff4259;
            border: 1px solid #eb4c33;
            position: absolute;
            right: 0;
            top: 0.5em;
            border-radius: 8px;
            width: 100px;
            text-align: center;
            padding: 0.6em 0;
            font-size: 12px
          span
            float: left;
            display: inline;
            width: 17px;
            height: 21px;
            background: url('https://static.epetbar.com/mpet/images/ico1.png') no-repeat;
            background-size: contain;
            margin: 1px 0 0 -25px;
          .mpasswordIco
            background url("https://static.epetbar.com/mpet/images/ico4.png") no-repeat
            background-size: contain;
          input
            display: block;
            height: 21px;
            width: 100%;
            font-size: 15px;
            border: none;
            padding: 0px;
            color: #666;
            font-family: "Microsoft Yahei",tahoma,arial;
            outline: none;
</style>
