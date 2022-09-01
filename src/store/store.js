import { createStore } from "vuex";
// 모든 vue 화면에서 공유되어질 state 관리목적
export default createStore({
    state:{
        // data를 모아서 관리하는 객체
    },
    actions:{
        // 서버 및 파일 연동, 성공,실패 체크 후 mutation 실행 then then , catch
    },
    mutations:{
        // state(데이터) 업데이트 자리
    },
    getters:{
        // state 출력자리
    }
});