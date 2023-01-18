$(function() {
    /* =========================== 메인 페이지 =========================== */
    // 탑 버튼 이벤트 시작
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
        $('#topBtn').fadeIn();
        } else {
        $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function() {
        $('html, body').animate({
        scrollTop : 0
        }, 400);
        return false;
    });    
   
    // 책 장르별로 추천 컨텐츠
    // 탭 컨텐츠 배열화
    let tabCnt = { cnt : [
        $("#book-list1"),
        $("#book-list2"),
        $("#book-list3"),
        $("#book-list4")
    ]};

    // 장르별 버튼을 클릭했을 때 해당 장르의 책 추천 목록이 뜨게하는 이벤트
    let genreBtn = $(".main-tab .tab-title .tt .ttgo");
    $(genreBtn).click(function(e){    
        // a태그의 기본 이벤트 막음        
        e.preventDefault();

        // 클릭된 버튼에 on클래스 추가
        $(this).addClass('on');
        // 클릭된 버튼이외에 버튼들에 on클래스 삭제
        $(genreBtn).not($(this)).removeClass('on');


        let cntIdx = $(this).parents().index();
        tabCnt.cnt[cntIdx].addClass('show');
        $(".book-list").not(tabCnt.cnt[cntIdx]).removeClass('show');
    });

    $(".book-list a").click(function(e){
        e.preventDefault();
    });

    // submit 이벤트 막기
     $("#login-form").submit(function(e){
        e.preventDefault();
    });

    // footer 이벤트
    // services a 태그 이벤트 막기
    $("footer .services").click(function(e){e.preventDefault();});
    // footer 로고 클릭 시 이벤트 상단으로 이동
    $(".footer-logo").click(function() {
        $('html, body').animate({
        scrollTop : 0
        }, 400);
        return false;
    });   

    // 책 추천 섹션

  var swiper = new Swiper(".mySwiperRecommend", {
    // slidesPerView: 3,
    // centeredSlides: true,
    // spaceBetween: 30,
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "fraction",
    // },
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".bookshelf .c-btn").click(function(){
    let c = $('#category-content-a').html();
    $("#category-content").html(c);
  });


});