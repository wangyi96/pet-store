import api from '../../api/index'
import {
  RECEIVE_HEADER,
  RECEIVE_SURPRISE,
  RECEIVE_FOODS,
  RECEIVE_CLASSIFY,
  RECEIVE_PHONE,
  RECEIVE_VERIFY,
  RECEIVE_SETPWD
} from './type'

const CODE_OK = 'succeed'

export default {
  getHeader({commit},callback){
    api.reqHeader().then(response =>{
      let result = response.data
      if(result.code === CODE_OK){
        const header = result
        commit(RECEIVE_HEADER,{header})

        callback && callback()
      }
    })
  },
  getSurprise({commit},callback){
    api.reqSurprise_day().then(response =>{
      let result = response.data
      if(result.code === CODE_OK){
        const surprise = result
        commit(RECEIVE_SURPRISE,{surprise})

        callback && callback()
      }
    })
  },
  getCat_foods({commit},callback){
    api.reqCat_foods().then(response =>{
      // console.log(response);
      let result = response.data
      if(result.code === CODE_OK){
        const foods = result
        commit(RECEIVE_FOODS,{foods})
        callback && callback()
      }
    })
  },
  getClassify({commit},callback){
    api.reqClassify().then(response =>{
      // console.log(response);
      let result = response.data
      if(result){
        const classify = result
        commit(RECEIVE_CLASSIFY,{classify})
        callback && callback()
      }
    })
  },
/*  phone({commit},phone){
    commit(RECEIVE_PHONE,{phone})
  },
  verify({commit},verify){
    commit(RECEIVE_VERIFY,{verify})
  },
  pwd({commit},setpwd){
    commit(RECEIVE_SETPWD,{setpwd})
  },*/
}
