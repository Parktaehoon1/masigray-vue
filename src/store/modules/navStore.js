import axios from 'axios';

const state = {
  // data를 모아서 관리하는 객체
  navData: [],
  franchData: []
}
const actions = {
  // 메뉴 데이터 json 로딩 
  fetchNavdata({commit}, obj) {

    // 외부 json 파일 로딩
    axios.get('/data/menu.json')
      .then(response => {
        // 서버 또는 파일이 결과가 있을때
        console.log("commit",commit);
        console.log("obj",obj);
        console.log('step 2 : axios : 날린다.', response.data);
        // mutation을 실행하라..
        commit('NAV_DATA_INIT', response.data)
      })
      .catch(err => console.log(err))
  },
  fetchFranchdata({commit}){
      axios.get('/data/franch.json')
      .then(response => {
        commit('FRANCH_DATA', response.data);
      })
      .catch(err => console.log(err));
  }
}
const mutations = {
  NAV_DATA_INIT(state, payload){
    state.navData = payload;
    console.log('state', state)
    console.log('step 3 : mutation 실행', payload);
  },
  FRANCH_DATA(state, payload){
    state.franchData = payload
  }
}
const getters = {
  // state 출력자리
  getNavData(state) {
    console.log('step 4 :getters computed로 감시하고이씀');
    console.log('step 4 :getters', state.navData);
    return state.navData;
  },
  getFranchData(state){
    console.log("받아와", state.franchData)
    return state.franchData;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
};