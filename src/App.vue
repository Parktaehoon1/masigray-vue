<template>
  <div class="wrap">
    <GoTop />
    <MobileMenu />
    <MobileDim />
    <MobileWrap />
    <FixMenu />

    <HeaderView :headerData="headerData"/>
    <VisualView />
    <ItemView />
    <BevarateView />
    <FranchView />
    <SnsView />
    <FooterView />

  </div>
</template>

<script>
  import GoTop from '@/components/GoTop.vue';
  import MobileMenu from '@/components/MobileMenu.vue';
  import MobileDim from '@/components/MobileDim.vue';
  import MobileWrap from '@/components/MobileWrap.vue';
  import FixMenu from '@/components/FixMenu.vue';
  import HeaderView from '@/components/HeaderView.vue';
  import VisualView from '@/components/VisualView.vue';
  import ItemView from '@/components/ItemView.vue';
  import BevarateView from '@/components/BevarateView.vue';
  import FranchView from '@/components/FranchView.vue';
  import SnsView from '@/components/SnsView.vue';
  import FooterView from '@/components/FooterView.vue';

  export default {
    components: {
      GoTop,
      MobileMenu,
      MobileDim,
      MobileWrap,
      FixMenu,
      HeaderView,
      VisualView,
      ItemView,
      BevarateView,
      FranchView,
      SnsView,
      FooterView
    },
    setup() {
      const headerData = [
        {
          url : '#',
          title : '마시그레이',
          subarr : [
            {
              suburl: '#',
              subtitle:'회사소개'
            },
            {
              suburl: '#',
              subtitle:'연역'
            },
            {
              suburl: '#',
              subtitle:'CEO인사말'
            },
            {
              suburl: '#',
              subtitle:'BI / 비전'
            },
            {
              suburl: '#',
              subtitle:'오시는길'
            },
          ]
        },
        {
          url : '#',
          title : '메뉴',
          subarr : [
            {
              suburl: '#',
              subtitle:'신메뉴'
            },
            {
              suburl: '#',
              subtitle:'커피'
            },
            {
              suburl: '#',
              subtitle:'음료'
            },
            {
              suburl: '#',
              subtitle:'디저트'
            },
            {
              suburl: '#',
              subtitle:'MD상품'
            },
          ]
        },
        {
          url : '#',
          title : '프랜차이즈',
          subarr : [
            {
              suburl: '#',
              subtitle:'가맹안내'
            },
            {
              suburl: '#',
              subtitle:'가맹절차'
            },
            {
              suburl: '#',
              subtitle:'매장인테리어'
            },
            {
              suburl: '#',
              subtitle:'커피 아카데미'
            },
            {
              suburl: '#',
              subtitle:'가맹상담신청'
            },
          ]
        },
        {
          url : '#',
          title : '매장안내',
          subarr : [
            {
              suburl: '#',
              subtitle:'매장안내'
            },
          ]
        },
        {
          url : '#',
          title : '공지사항',
          subarr : [
            {
              suburl: '#',
              subtitle:'공지사항'
            },
            {
              suburl: '#',
              subtitle:'이벤트'
            },
          ]
        },
        {
          url : '#',
          title : '고객의소리',
          subarr : [
            {
              suburl: '#',
              subtitle:'FAQ'
            },
            {
              suburl: '#',
              subtitle:'QNA'
            },
            {
              suburl: '#',
              subtitle:'케이터링'
            },
          ]
        },
     
      ]
      return {
        headerData
      }
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