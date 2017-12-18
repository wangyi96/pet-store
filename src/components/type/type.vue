<template>
  <div class="type">
    <div class="tab1">
      <div class="leftbox" ref="leftbox">
        <div>
          <ul>
            <li class="liIndex" :class="{liClass:classArry[index]==0}" v-for="(cls,index) in classify.type" @click="changeBox(index,$event)">
              {{cls.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="rightbox" ref="rightbox">
        <div>
          <div class="rightbox_wrap" v-if="classify.type_list">
            <div v-for="(tbox,index) in classify.type_list[flag].data">
              <div class="rightbox_inner" v-if="tbox.type==0">
                <a href="javascript:;" class="tbox_title">{{tbox.title}}</a>
                <ul>
                  <li v-for="(item,index) in tbox.list">
                    <a href="javascript:;">
                      <div>
                        <img :src="item.photo || item.logo" alt="">
                      </div>
                      <p>{{item.name}}</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="rightbox_inner2" v-if="tbox.type==2">
                <a href="javascript:;" class="tbox_title">{{tbox.title}}</a>
                <ul>
                  <li v-for="(item,index) in tbox.list">
                    <a href="javascript:;">
                      <div>
                        <img :src="item.photo || item.logo" alt="">
                      </div>
                      <p>{{item.name}}</p>
                    </a>
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
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        flag:0,
        classArry:[0]
      }
    },
    props:{
      classify:Object
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll(this.$refs.leftbox,{
          click:true
        })
        new BScroll(this.$refs.rightbox)
      })
    },
    methods:{
      changeBox(index,event){
        let num = index%5
        this.flag = num
        let lis = document.getElementsByClassName('liIndex')

        Array.apply(null,lis).forEach((value)=>{
          value.classList.remove('liClass')
        })

        event.target.classList.add('liClass')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .type
    width 100%
    height 100%
    .tab1
      overflow hidden
      .leftbox
        position: fixed;
        top: 40px;
        left: 0;
        bottom: 0;
        padding-bottom: 45px;
        overflow hidden
        div
          padding-bottom: 45px;
        ul
          li
            padding: 15px 0;
            border-bottom: 1px solid #f3f4f5;
            width: 70px;
            height: 50px;
            font-size: 13px;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align center
            overflow: hidden;
            background white
            &.liClass
              background: #f3f4f5;
              color: #ed4044;
      .rightbox
        position: fixed;
        top: 40px;
        left: 0;
        bottom: 0;
        padding-bottom: 45px;
        background white
        margin-left: 75px
        overflow hidden
        >div
          padding-bottom: 45px;
        .rightbox_wrap
          width 100%
          height 100%
          font-size 14px
          .rightbox_inner2
            padding: 15px 5px 20px;
            border-top: 1px solid #f3f4f5;
            .tbox_title
              font-size 12px
              color: #999
              padding-left: 5px
              margin-top: 10px
            ul
              overflow hidden
              width 100%
              li
                width: 50%;
                padding: 0 5px;
                float: left;
                margin-top: 10px;
                div
                  width 100%
                  border: 1px solid #f3f4f5;
                  text-align: center;
                  padding 10px 0px
                  img
                    height: 45px;
                    max-width: 100%;
                p
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  height: 20px;
                  text-align center
                  font-size: 12px;
                  margin-top: 10px;

          .rightbox_inner
            padding: 15px 5px 20px;
            border-top: 1px solid #f3f4f5;
            .tbox_title
              font-size 12px
              color: #999
              padding-left: 5px
              margin-top: 10px
            ul
              overflow hidden
              width 100%
              li
                width: 33.33%;
                padding: 0 5px;
                float: left;
                margin-top: 10px;
                p
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  height: 20px;
                  text-align center
                  font-size: 12px;
                  margin-top: 10px;
                img
                  width 100%
</style>
