<template>
  <div class="login">
    <div class="login_wrap">
      <form method="post" id="login_form" action="">
        <div>
          <ul>
            <li>
              <span class="mNameIco"></span>
              <input type="text" placeholder="手机号/邮箱/用户名" class="text" name="username" id="username">
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="password" placeholder="输入密码" class="text" name="password" id="password">
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login
    width 100%
    .login_wrap
      background: #fff;
      border-radius: 0.5em;
      margin: 0em 4% 1em 4%;
      padding: 0 1.6%;
      ul
        li
          border-bottom: #e2e2e2 solid 1px;
          padding: 12px 0 12px 30px;
          position: relative;
          span
            float: left;
            display: inline;
            width: 17px;
            height: 21px;
            background: url('https://static.epetbar.com/mpet/images/ico3.png') no-repeat;
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
