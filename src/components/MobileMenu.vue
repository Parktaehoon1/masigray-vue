<template>
  <!-- 모바일메뉴 -->
  <a href="#" class="mb-bt">
    <span></span>
  </a>
</template>

<script>
  import $ from 'jquery';
  import {
    onMounted
  } from 'vue';
  export default {
    setup() {
      onMounted(() => {
        let mb_mainmenu = $('.mb-menu > li > a');
        let mb_submenu = $('.mb-submenu');

        $.each(mb_mainmenu, function (index) {
          // 인덱스가 들어가면 mb_main_menu의 0,1,2,순서들어감
          $(this).click(function (event) {
            // href를 막는다.
            event.preventDefault();

            // 클릭하면 현재 포커스 클래스가 있는지 검토
            let temp = $(this).hasClass('mb-menu-focus');

            if (temp) {
              // 포커스 색상 적용해제
              $(this).removeClass('mb-menu-focus');
              // 아이콘 모션 해제 
              $(this).removeClass('mb-icon-rot')
              // 펼처진 해당 서브 메뉴를 닫아준다.
              mb_submenu.eq(index).hide();
            } else {
              // 일단 모두 숨겨라 
              mb_submenu.hide();
              // 일단 모든 포커스 색상을 해제한다.
              mb_mainmenu.removeClass('mb-menu-focus');
              // 일단 아이콘을 원래대로 돌려라 
              mb_mainmenu.removeClass('mb-icon-rot')
              // 포커스 색상 적용하기
              $(this).addClass('mb-menu-focus');
              // 아이콘을 돌리자.
              $(this).addClass('mb-icon-rot')
              // 클릭된 번호만 보여라
              mb_submenu.eq(index).show();
            }
          });
        });
        // 모바일 메뉴 보이기 기능
        let mb_dim = $('.mb-dim'); // 가림막
        let mb_bt = $('.mb-bt') // 햄버거
        mb_bt.click(function (event) {
          // a 태그의 href 를 막는다
          event.preventDefault();
          // 배경 보여주기
          mb_dim.show(); // show가 display block 효과
          // 메뉴 보여지는 과정
          mb_wrap.addClass('mb-wrap-open');
        })

        // 모바일 메뉴 숨기기 기능
        let mb_close = $('.mb-close')
        let mb_wrap = $('.mb-wrap');
        mb_close.click(function (event) {
          // a 태그의 href 막아준다.
          event.preventDefault();
          // 배경을 숨긴다.
          mb_dim.hide();
          // 주메뉴 색상 제거
          mb_mainmenu.removeClass('mb-menu-focus');
          // 서브메뉴 모두 닫기
          mb_submenu.hide();
          // 사라지는 모션실행
          mb_wrap.removeClass('mb-wrap-open');
        })
        // 반응형 처리
        $(window).resize(function () {
          let temp = $(window).width();
          if (temp > 760) {
            mb_dim.hide();
            mb_wrap.removeClass('mb-wrap-open');
            mb_mainmenu.removeClass('mb-menu-focus');
            mb_mainmenu.removeClass('mb-icon-rot');
            mb_submenu.hide();

          }
        });
      })
      return {

      }
    }
  }
</script>

<style scoped>
  /* 모바일 메뉴 */
  .mb-bt {
    position: fixed;
    left: 20px;
    top: 30px;
    display: none;
    width: 22px;
    height: 21px;
    z-index: 99997;
  }

  .mb-bt::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 3px;
    background-color: #51504e;
  }

  .mb-bt span {
    position: absolute;
    left: 0;
    top: 9px;
    display: block;
    width: 100%;
    height: 3px;
    background-color: #51504e;

  }

  .mb-bt::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 3px;
    background-color: #51504e;
  }

  @media all and (max-width:700px) {
    .mb-bt {
      display: block;
    }
  }
</style>