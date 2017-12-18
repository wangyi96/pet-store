import {
  RECEIVE_HEADER,
  RECEIVE_SURPRISE,
  RECEIVE_FOODS,
  RECEIVE_CLASSIFY
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
  }
}
