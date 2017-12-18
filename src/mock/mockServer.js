import Mock from 'mockjs'
import data from './data.json'

// 通过mockjs向外暴露3个接口
Mock.mock('/api/header', data.header)
Mock.mock('/api/surprise_day', data.surprise_day)
Mock.mock('/api/cat_foods', data.cat_foods)
Mock.mock('/api/classify', data.classify)

// 当前模块只需要被执行一次, 接口就可以访问了
console.log('执行mockServer...')
