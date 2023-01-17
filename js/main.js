$(function(){
    // 메인슬라이드
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


  // 탭메뉴 슬라이드
  var swiper2 = new Swiper(".new_product", {
      loop:true,
      pagination: {
        el: ".tab_con1 .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".tab_con1 .swiper-button-next",
        prevEl: ".tab_con1 .swiper-button-prev",
      },
      breakpoints: {
        
        480: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1281: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

    var swiper3 = new Swiper(".best_product", {
      loop:true,
      pagination: {
        el: ".tab_con2 .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".tab_con2 .swiper-button-next",
        prevEl: ".tab_con2 .swiper-button-prev",
      },
      breakpoints: {
        
        480: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1281: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

    var swiper4 = new Swiper(".eventSlide", {
      slidesPerView: 1.5,
      spaceBetween: 30,
      loop:true,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
      navigation: {
        nextEl: "section.event .swiper-button-next",
        prevEl: "section.event .swiper-button-prev",
      },
      breakpoints: {
        
        480: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 50,
        },
        1281: {
          slidesPerView: 3,
          spaceBetween: 80,
        },
      },
    });



  // 모든 a태그를 클릭하면 href속성 막기
  $('a').click(function(e){
    e.preventDefault();
  });




// 모바일에서만 실행
if($(window).width() <= 1280) {

    // 햄버거메뉴를 클릭하면 팝업메뉴가 왼쪽에서 나타남
    $('.menu').click(function(){
      $('.popup_menu').animate({'left':0});
      // 윈도우의 화면 스크롤 막음
      $('html,body').css('overflow-y','hidden');
    });
    // 팝업메뉴의 닫기버튼을 클릭하면 팝업 메뉴가 왼쪽으로 들어감
    $('.close_btn').click(function(){
      $('.popup_menu').animate({'left':'-110vw'});
      // 윈도우의 화면 스크롤 활성화
      $('html,body').css('overflow-y','visible');
    });

    // 아코디언 메뉴
    var popup_nav = $('.popup_menu .popup_nav nav > ul > li > a');
    popup_nav.click(function(){
      // 만약 메뉴에 active가 설정되어 있지않으면
      if($(this).attr('class') !='active'){
          popup_nav.next().slideUp();
          popup_nav.removeClass('active');
          $(this).next().slideDown();
          $(this).addClass('active');
          

      }else{
          //다시 클릭한 주메뉴의 서브메뉴 들어감
          $(this).next().slideUp();
          //다시 클릭한 주메뉴에서 active클래스 제거
          $(this).removeClass('active');

      }
    });
  }else{
    // 모바일이 아니면 실행
    $('header nav .sub').hide();
    $('header nav > ul > li > a').hover(function(){
      if($(this).next().is('.sub')){
        $('header nav .sub').stop().slideDown();
        $('header nav .sub').css('z-index',11);
        $(this).next().css('z-index',20);
      }else{
        $('header nav .sub').stop().slideUp();
      }
    });
    $('header nav').mouseleave(function(){
      $('header nav .sub').stop().slideUp();
    });
    
    $('.top').click(function(){
      //fullpage 플러그인을 사용할 때에는 명령어가 아래와 같습니다.
      $.fn.fullpage.moveTo(1, 1);
    });

    
    $('#fullpage').fullpage(); 

  
  }

  
  



        // 탭메뉴
    // 모든 탭내용 숨김
    $('.tab_con > div').hide();
    // 첫번째 탭내용만 보임
    $('.tab_con > div:first').show();
    $('.tab_title ul li:first').click(function(){
      $('.tab_title ul li:first').addClass('active');
      $('.tab_title ul li:last').removeClass('active');
      $('.tab_con > div:first').show();
      $('.tab_con > div:last').hide();
    });
    $('.tab_title ul li:last').click(function(){
      $('.tab_title ul li:first').removeClass('active');
      $('.tab_title ul li:last').addClass('active');
      $('.tab_con > div:first').hide();
      $('.tab_con > div:last').show();
    });

    
  
});

