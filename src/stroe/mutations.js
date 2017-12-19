import {
  RECEIVE_HEADER,
  RECEIVE_SURPRISE,
  RECEIVE_FOODS,
  RECEIVE_CLASSIFY,
  RECEIVE_VERIFY,
  RECEIVE_SETPWD,
  RECEIVE_PHONE
} from './type'

import Vue from 'vue'

export default {
  [RECEIVE_HEADER](state,{header}){
    state.header = header
  },
  [RECEIVE_SURPRISE](state,{surprise}){
    // console.log(surprise);
    state.surprise_day = surprise
  },
  [RECEIVE_FOODS](state,{foods}){
    // console.log(foods);
    state.cat_foods = foods
  },
  [RECEIVE_CLASSIFY](state,{classify}){
    // console.log(foods);
    state.classify = classify
  },
/*  [RECEIVE_PHONE](state,{phone}){
    // console.log(foods);
    state.userMessage.phone = phone
  },
  [RECEIVE_VERIFY](state,{verify}){
    // console.log(foods);
    state.userMessage.verify = verify
  },
  [RECEIVE_SETPWD](state,{setpwd}){
    // console.log(setpwd);
    state.userMessage.setpwd = setpwd
  },*/

}
