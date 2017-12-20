# 仿E宠商城App
## 项目描述
- 此项目为E宠商城猫猫站部分功能的实现
- 包括商品，分类，购物车，个人中心等多个子模块
- 使用Vue全家桶+ES6+WebPack等前端最新最热的技术
- 采用模块化、组件化、工程化的模式开发

### 项目功能界面


### 技术选型
- 前台数据处理:vue,vue-router,mint-ui,vue-lazyload,moment
- 前后台交互：mock数据/接口,node模拟,ajax请求,axios
- 模块化：ES6/babel
- 工程化:vue-cli,webpack,eslink
- css预编译器：sass/less
- 滑动库：better-scroll/vue-scroll

### 前端路由
- home.vue:主页面
- classify.vue:分类路由
- showCat.vue:购物车路由
- userCenter.vue:登录注册路由

### vue组件
- header.vue:头部组件
- catfoods.vue:页面组件
- footer.vue:低部组件
- type.vue:分类组件
- brand.vue:品牌组件
- login.vue:登录组件
- register.vue:注册组件

## 应用开发详解
### 使用vue-cli搭建项目环境
- Vue-cli是vue官方提供的用于搭建基于vue+webpack+es6项目的脚手架工具
```
  npm install -g vue-cli : 全局下载工具
  vue init webpack app :下载基于webpack模板项目
  cd ele
  npm install : 下载项目依赖的所有模块
  npm run dev / npm start
  访问: localhost:8080
```

### 项目结构分析
```
    |-- build : webpack相关的配置文件夹(基本不需要修改)
  		|-- dev-server.js : 通过express启动后台服务器
  	|-- config: webpack相关的配置文件夹(基本不需要修改)
  		|-- index.js: 指定的后台服务的端口号和静态资源文件夹
  	|-- node_modules 所需资源包
  	|-- src : 源码文件夹
  		|-- components: vue组件及其相关资源文件夹
  		|-- App.vue: 应用根主组件
  		|-- main.js: 应用入口js
  	|-- static: 静态资源文件夹
  	|-- .babelrc: babel的配置文件
  	|-- .editorconfig: 通过编辑器的编码/格式进行一定的配置
  	|-- .eslintignore: eslint检查忽略的配置
  	|-- .eslintrc.js: eslint检查的配置
  	|-- .gitignore: git版本管制忽略的配置
  	|-- index.html: 主页面文件
  	|-- package.json: 应用包配置文件
  	|-- README.md: 应用描述说明的readme文件
```

### 编码测试与打包发布项目
- 编码测试
```
  npm run dev
  访问: http://localhost:8080
  编码, 自动编译打包(HMR), 查看效果
```
- 打包发布
```
  npm run build
  npm install -g serve
  serve dist
  访问: http://localhost:5000
```

## 资源准备
### 相关概念
- 标注图(设计稿): 对应用界面各个组成元素进行坐标/大小/颜色等进行标签的界面图
- 切图: 将应用界面的一些静态图形部分, 通过工具(如photoshop)剪裁生成的图片
- 图片Base64: 样式中引用的小图片, 在webpack打包会自动处理转换为样式内部的Base64编码字符串
- 2x与3x图: 不同手机的屏幕密度不一样, 一般都在2以上(如iphone6为2,iphone6s为3),  为了适配不同的手机, UI设计师为同一个图片制作了2x和3x的2套图片(图形一样, 但大小不一样)

### Stylus
- 当前主流的三种css预编译器(对比)
  - Less
  - Sass
  - Stylus:完全通过缩进控制, 不需要大括号和分号,　冒号是可选的
- 安装stylus依赖包
  - ``npm install stylus stylus-loader --save-dev``
- 编写样式
```
 <style lang="stylus" rel="stylesheet/stylus">

 </style>
```

### 引入vue-router
- 下载``npm install vue-router --save``
- 编码
```
  import Vue from 'vue'
  import VueRouter from 'vue-router'

  import Home from '../pages/home/home.vue'
  import Classify from '../pages/classify/classify.vue'
  import ShowCat from '../pages/showCat/showCat.vue'
  import UserCenter from '../pages/userCenter/userCenter.vue'
  import Type from '../components/type/type.vue'
  import Brand from '../components/brand/brand.vue'
  import Login from '../components/login/login.vue'
  import Register from '../components/register/register.vue'

  Vue.use(VueRouter)

  export default new VueRouter({
    linkActiveClass:'active',
    routes:[
      {
        path:'/',
        redirect:'/home'
      },
      {
        path:'/home',
        component:Home
      },
      {
        path:'/classify',
        component:Classify,
        children:[
          {
            path:'/classify/type',
            component:Type
          },
          {
            path:'/classify/brand',
            component:Brand
          },
          {
            path:'/classify',
            redirect:'/classify/type'
          },
        ]
      },
      {
        path:'/showCat',
        component:ShowCat
      },
      {
        path:'/userCenter',
        component:UserCenter,
        children:[
          {
            path:'/userCenter/login',
            component:Login
          },
          {
            path:'/userCenter/register',
            component:Register
          },
          {
            path:'/userCenter',
            redirect:'/userCenter/login'
          }
        ]
      },
    ]
  })

```

### 模拟(mock)数据/接口
- Web应用前后端(台)分离:
  - 后台向前台提供API接口, 只负责数据的提供和计算，而完全不处理展现
  - 前台通过Http(Ajax)请求获取数据,　在浏览器端动态构建界面显示数据
- 设计JSON数据结构
  - 理解JSON数据结构
  - 编写模拟JSON数据: src/mock/data.json
- json数据
  - 结构: 名称, 数据类型
  - value: 数据
  - value可以变, 但结构不能变

### 使用mock
- 下载：``npm install mockjs --save``
```
  import Mock from 'mockjs'
  import data from './data.json'

  // 通过mockjs向外暴露3个接口
  Mock.mock('/api/header', data.header)
  Mock.mock('/api/surprise_day', data.surprise_day)
  Mock.mock('/api/cat_foods', data.cat_foods)
  Mock.mock('/api/classify', data.classify)

  // 当前模块只需要被执行一次, 接口就可以访问了
  console.log('执行mockServer...')
```

### 使用postman工具测试接口
- postman是用来测试API接口的chrome插件
- postman也是一个活接口文档

### 使用vuex管理状态
- 下载:``npm install --save vuex``
```
  import Vue from 'vue'
  import Vuex from 'vuex'

  import state from './state'
  import actions from './actions'
  import mutations from './mutations'
  import getters from './getters'

  Vue.use(Vuex)
  export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
  })
```

## 项目优化/扩展
### 缓存路由组件
- 好处: 复用路由组件对象, 复用路由组件获取的后台数据
```
  <keep-alive>
    <router-view />
  </keep-alive>
```

### 路由组件懒加载
```
  const goods = () => import('pages/goods/goods.vue')
  const ratings = () => import('pages/ratings/ratings.vue')
  const seller = () => import('pages/seller/seller.vue')
```


## 项目中遇到的问题
### 如何实现跨越
- 在用node模拟动态获取短信验证时，后台路由的端口号是：``http://localhost:3000/``
- 当前服务器地址：``http://localhost:8080/#/home``
- 三种方法
  - 在后台服务器：给路由加上
  ```
    //允许http://localhost:8080这个网站访问
    res.set('Access-Control-Allow-Origin','http://localhost:8080');
  ```
  - 在当前服务器:实现代理
  ```
    //在config/index.js中设置
    proxyTable: {
      '/api': {
        target: 'http://localhost:3000',  //访问的网站
        changeOrigin: true,               //允许跨域
        pathRewrite: {
          '^/api': '/'                    //会将/api 转化为 /
        }
      }
    }

    //在发送请求是时候在请求地址前加上'/api'
    let url = `/api/sendcode?phone=${this.$refs.setphone.value}`
     axios.get(url)
       .then((response)=>{
       console.log(response);
     })
  ```

## 如何在主路由获取子路由的数据
- 子路由中的数据保存到vueX中，主路由需要时直接去找vuex
```
  //子路由
  <input v-model='phone' ref="statePwd" type="text" class="dttext" placeholder="动态密码">

  export default {
    data(){
      return{
        phone:''
      }
    },
    watch:{
      phone(){
        this.$stroe.dispatch('phone',this.phone)
      }
    }
  }

  //父路由
  import {mapState} from 'vue'

   export default {
      computed:{
        ...mapState(['phone'])
      }
    }
```
- 使用PubSub-js去订阅发布实现
```
  //子路由，发布
  PubSub.publish('phone',this.phone)

  //父路由，订阅
  PubSub.subscribe('phone',(msg,data)=>{
     console.log(data)
  })
```

### 使用better-scroll滑动库常见的问题
- 确保外层wrap比内层inner小
- 确保wrap下只有一个子元素
- wrap和innerz中不要使用v-show,v-if等判断语句
- 报错提示找不到children
  - 可能是创建滑动时wrap的子标签元素还没有创建
- 没有报错但是还是滑不动
  - 需要对数据进行监视，当数据发生变化时重新创建BScroll
```
  <div class="wrap" ref='wrap>
    <div class="inner">

    </div>
  </div>

  import BScroll from 'better-scroll'

  this.$nextTick(()=>{
    new BScroll(this.$refs.wrap)
  })
```


## 如何动态获取图形验证码
- 引用一个jquery插件库
- 通过创建一个GVerify
```
  <div id="v_container" style="width: 200px;height: 50px;"></div>

  //标签中的id和创建GVerify传入的标签id一样
  mounted(){
     //res是一个Boolean值，true为验证成功
     let res = new GVerify("v_container")
     if(res){
        alert('验证成功')
     }else{
        alert('验证失败')
     }
  }
```

###
