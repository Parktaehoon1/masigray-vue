<template>
  <!-- items -->
  <section class="items">
    <div class="inner clearfix">
      <div class="items-box">
        <img :src="require('@/assets/images/mb01_img.png')">

        <span class="bar"></span>

        <a href="#">
          <h3>브랜드 스토리</h3>
          <p>마시그래이는 표준어로 '마셔라' 라는 <br>사투리의 표현을 가져온 것으로 브랜드네임에서부터 <br>고객에게 친밀하게 다가가고자 하는 마음을 담았습니다.</p>
        </a>
      </div>

      <div class="items-box">
        <!-- item 슬라이드 -->
        <Swiper
            :modules="modules" 
            :autoplay= "{
              delay: 1000,
              disableOnInteraction: false,
            }" 
            :loop="true" 
            :navigation="{
              nextEl: '.sw-items-next',
              prevEl: '.sw-items-prev'
            }" 
            :pagination="{
              el:'.sw-items-pg'
            }" 
            class="sw-items">
          <SwiperSlide v-for="(item, index) in slideData" v-bind:key="index">
            <a :href="item.vlink" :style="{background:'url('+ require(`@/assets/images/${item.vimg}`) + ')'}"></a>
          </SwiperSlide>
          <!-- 이동버튼 -->
          <button class="sw-items-prev"></button>
          <button class="sw-items-next"></button>
          <!-- 컨트롤 -->
          <div class="sw-items-control">
            <!-- Pangination -->
            <div class="sw-items-pg"></div>
          </div>
        </Swiper>
      </div>

      <div class="items-box">
        <a href="#">
          <h3>창업절차</h3>
          <p>체계적인 마시그래이의 <br>창업시스템에 대해 알아보세요.</p>
        </a>
        <a href="#">
          <h3>창업문의</h3>
          <p>차별화된 Take-out 브랜드<br>
            마시그래이에 대해 알아보세요.
          </p>
        </a>
      </div>
      <div class="items-box">
        <div class="search-left"></div>
        <div class="search">
          <h2>
            STORE
          </h2>

          <h3>
            매장
          </h3>


          <p>가까운 마시그래이 매장을<br>
            찾아보세요
          </p>

          <form action="test.asp" class="search-form">
            <label for="shop">지점명</label>
            <input type="text" name="shop" id="shop" class="shop">
            <input type="submit" class="search-bt">
          </form>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';
  import {
    Autoplay,
    Navigation,
    Pagination
  } from 'swiper'
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
    const slideData = [
    {
      vlink:"#",
      vimg:"mb02_bg.jpg"
    },
    {
      vlink:"#",
      vimg:"mb03_bg.jpg"
    },
    {
      vlink:"#",
      vimg:"mb04_bg.jpg"
    },
    {
      vlink:"#",
      vimg:"mb05_bg.jpg"
    },
    {
      vlink:"#",
      vimg:"mb06_bg.jpg"
    },
    ]


      return {
        modules: [Autoplay, Navigation, Pagination],
        slideData
      }
    }
  }
</script>

<style>
  /* items */
  .items {
    position: relative;
    display: block;
    padding: 100px 0;
  }

  .items .inner {}

  .items-box {
    position: relative;
    display: block;
    width: 50%;
    height: 323px;
    float: left;
    overflow: hidden;
  }

  .items-box:nth-child(1) {
    background: url('@/assets/images/mb01_bg.jpg') no-repeat center;
    background-size: cover;
    text-align: center;
  }

  .items-box:nth-child(1) img {
    margin-top: 65px;
    margin-bottom: 25px;
  }

  .items-box:nth-child(1) span {
    position: relative;
    display: block;
    width: 58px;
    height: 1px;
    background-color: #fff;
    margin: 0 auto;
    margin-bottom: 35px;
  }

  .items-box:nth-child(1) a {
    position: relative;
    display: block
  }

  .items-box:nth-child(1) a h3 {
    position: relative;
    display: block;
    font-size: 25px;
    color: #fff;
  }

  .items-box:nth-child(1) a p {
    position: relative;
    display: block;
    font-size: 16px;
    color: #fff;
    line-height: 1.3;
  }

  /* 슬라이드 넣기 */
  .items-box:nth-child(2) {}

  .sw-items {
    width: 100%;
    height: 100%;
  }

  .sw-items .swiper-slide a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  .items1 {
    background: url('@/assets/images/mb02_bg.jpg') no-repeat center;
    background-size: cover;
  }

  .items2 {
    background: url('@/assets/images/mb03_bg.jpg') no-repeat center;
    background-size: cover;
  }

  .items3 {
    background: url('@/assets/images/mb04_bg.jpg') no-repeat center;
    background-size: cover;
  }

  .items4 {
    background: url('@/assets/images/mb05_bg.jpg') no-repeat center;
    background-size: cover;
  }

  .items5 {
    background: url('@/assets/images/mb06_bg.jpg') no-repeat center;
    background-size: cover;
  }

  .sw-items-prev {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 14px;
    height: 23px;
    background: url('@/assets/images/btn_arrow2.png') no-repeat 0 0;
    z-index: 9;
    border: 0;
    cursor: pointer;
  }

  .sw-items-next {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 14px;
    height: 23px;
    background: url('@/assets/images/btn_arrow2.png') no-repeat right top;
    z-index: 9;
    border: 0;
    cursor: pointer;
  }

  .sw-items-control {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    display: block;
    z-index: 9;
  }

  .sw-items-pg .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #fff;
    opacity: 0.5;
    margin: 5px;
    border-radius: 5px;
    transition: all 0.5s;
  }

  .sw-items-pg .swiper-pagination-bullet-active {
    width: 30px;
    opacity: 1;
  }


  /* 링크 */
  .items-box:nth-child(3) {}

  .items-box:nth-child(3) a {
    position: relative;
    display: block;
    width: 50%;
    height: 100%;
    float: left;
    text-align: center;
  }

  .items-box:nth-child(3) a:first-child {
    background: #f3f3f3 url('@/assets/images/franchise_ico01.png') no-repeat center 60px;
  }

  .items-box:nth-child(3) a:last-child {
    background: #fff url('@/assets/images/franchise_ico02.png') no-repeat center 60px;
  }

  .items-box:nth-child(3) a h3 {
    position: relative;
    display: inline-block;
    /* 인라인블럭으로 했던 이유는 인라인블록으로 해야 보더 바텀이 쭉 감 */
    text-align: center;
    font-size: 25px;
    color: #000;

    margin-top: 190px;
    margin-bottom: 10px;
    border-bottom: 1px solid #000;

  }


  .items-box:nth-child(3) a p {
    position: relative;
    display: block;
    text-align: center;
    font-size: 16px;
    color: #888;
  }

  .items-box:nth-child(4) {
    /* background: #292929 url('@/assets/images/store01.jpg') no-repeat left center; */
  }

  .search-left {
    position: relative;
    display: block;
    width: 50%;
    height: 100%;
    float: left;
    background: url('@/assets/images/store01.jpg') no-repeat left center;
    background-size: cover;
  }

  .search {
    position: relative;
    display: block;
    width: 50%;
    height: 100%;
    background-color: #292929;

    float: right;
    text-align: center;
    padding: 0 35px;
  }

  .search h2 {
    position: relative;
    display: block;
    font-size: 25px;
    color: #ba9b65;
    margin-top: 60px;
  }


  .search h3 {
    display: inline-block;
    font-size: 25px;
    color: #ba9b65;
    font-weight: 500;
    padding-bottom: 20px;
    /* 테두리때문에 패딩줌 */

    border-bottom: 1px solid #ba9b65;
    margin-bottom: 20px;
  }


  .search p {
    position: relative;
    display: block;
    color: #ba9b65;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    margin-bottom: 25px;
  }


  .search .search-form {
    position: relative;
    display: block;
    width: 100%;
    height: 39px;
    background-color: #3e3e3e;
    padding-right: 39px;
  }

  .search-form label {
    display: none;
  }

  .shop {
    position: relative;
    display: block;
    width: 100%;
    line-height: 39px;
    color: #fff;
    background-color: transparent;
    border: 0;

    padding: 0 10px;
  }

  .search-bt {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    width: 39px;
    height: 39px;
    background: url('@/assets/images/btn_store.gif') no-repeat center;
    border: 0;
    font-size: 0;
  }

  /* items PC 영역 */
  /* items 반응형 영역 */
  @media all and (max-width: 1000px) {
    .items {
      padding: 10vw 0;
    }
  }

  @media all and (max-width: 800px) {
    .items-box>:nth-child(3) a p {
      font-size: 14px;
    }
  }

  @media all and (max-width:640px) {
    .items-box {
      width: 100%;
    }

    .items-box>:nth-child(3) a p {
      font-size: 14px;
    }
  }
</style>