<template>
  <div>
    <ModalView />

    <div class="wrap">

      <GoTop />
      <MobileWrap />
      <FixMenu />
      <HeaderView />
      <VisualView />
      <ItemView />
      <BevarateView />
      <FranchView />
      <SnsView />
      <FooterView />

    </div>
  </div>
</template>

<script>
  import GoTop from '@/components/GoTop.vue';
  import MobileWrap from '@/components/MobileWrap.vue';
  import FixMenu from '@/components/FixMenu.vue';
  import HeaderView from '@/components/HeaderView.vue';
  import VisualView from '@/components/VisualView.vue';
  import ItemView from '@/components/ItemView.vue';
  import BevarateView from '@/components/BevarateView.vue';
  import FranchView from '@/components/FranchView.vue';
  import SnsView from '@/components/SnsView.vue';
  import FooterView from '@/components/FooterView.vue';
  import ModalView from '@/components/ModalView.vue'
  // 공통 관리되는 state 를 참조
  // 여기서는 actions를 호출하는 용도로 사용.
  // vuex를 참조하는 객체를 접근하려하면 아래 구문으로 접근


  export default {
    name: 'App',
    components: {
      GoTop,
      MobileWrap,
      FixMenu,
      HeaderView,
      VisualView,
      ItemView,
      BevarateView,
      FranchView,
      SnsView,
      FooterView,
      ModalView
    },
    setup() {
      // 외부에 잇는 menu.json 파일 불러오기 위해 actions 활용
      // actions 의 method 를 사용할떄 
      // store.dispatch('메소드명')
      return {}
    }
  }
</script>

<style>
  @charset 'utf-8';

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline-style: none;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  img {
    vertical-align: top;
    border: 0;
  }

  html {
    font-size: 16px;
    overflow-x: hidden;

  }


  body {
    font-family: 'NanumSquare', 'Malgun Gothic', '맑은 고딕', "돋움", Verdana, sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.5px;
    line-height: 1.6;
    color: #888;
    overflow-x: hidden;

  }

  /* 공통(재사용) */
  .inner {
    position: relative;
    display: block;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  /* float를 해제 */
  .clearfix::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    clear: both;
  }
</style>