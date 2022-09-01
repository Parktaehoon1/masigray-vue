import { createStore } from "vuex";
// 모든 vue 화면에서 공유되어질 state 관리목적
import navStore from './modules/navStore'

export default createStore({
  modules:{
    navStore
  }
});