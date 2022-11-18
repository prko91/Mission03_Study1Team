$(document).ready(function () {
  // .navi의 li 태그에 mouseover 이벤트 설정
  $('.navi > li').mouseover(function () {
    // $(this) : 현재 선택된 태그(요소)
    // find('.submenu') : 선택된 태그의 자식 태그 중 .submenu와 일치하는 태그를 찾아서 반환함. 만약에, children()를 사용할 경우 직계 자식 태그를 반환함
    // stop() : 현재 동작하고 있는 애니메이션 동작을 즉시 중단함.
    // slideDown(), slideUp() : jQuery 라이브러리에서 제공하는 함수로 슬라이딩 애니메이션과 함께 보여주거나 숨김 구현함. 선택한 요소의 height값을 낮추거나 높여가며 슬라이드 업 또는 다운 전환되게 함. 이때, 매개변수값(인수) 500은 0.5초를 의미함
    $(this).find('.submenu').stop().slideDown(500); // 500ms = 0.5s(0.5초)
  }).mouseout(function () {
    $(this).find('.submenu').stop().slideUp(500);
  });

  // $(".notice li:first").click 의미는 ".notice 요소의 후손 요소 중에서 "첫번째 요소를 클릭하면" 입니다."
  $(".notice li:first").click(function () {
    // #modal과 일치하는 요소에 'active' 클래스를 추가함
    $("#modal").addClass("active");
  });

  $('.navi2 > li').mouseover(function () {
    // $(this) : 현재 선택된 태그(요소)
    // find('.submenu') : 선택된 태그의 자식 태그 중 .submenu와 일치하는 태그를 찾아서 반환함. 만약에, children()를 사용할 경우 직계 자식 태그를 반환함
    // stop() : 현재 동작하고 있는 애니메이션 동작을 즉시 중단함.
    // slideDown(), slideUp() : jQuery 라이브러리에서 제공하는 함수로 슬라이딩 애니메이션과 함께 보여주거나 숨김 구현함. 선택한 요소의 height값을 낮추거나 높여가며 슬라이드 업 또는 다운 전환되게 함. 이때, 매개변수값(인수) 500은 0.5초를 의미함
    $(this).find('.submenu2').stop().slideDown(300); // 500ms = 0.5s(0.5초)
  }).mouseout(function () {
    $(this).find('.submenu2').stop().slideUp(300);
  });

  var btn = document.querySelectorAll('.swapBtn')
  var slides = document.querySelectorAll('.slide').length - 1
  var slot = 0

  btn[0].addEventListener('click', function (e) {
    if (play) {
      clearInterval(play)
    }
    var e = document.querySelector('.showing')

    if (slot == 0) {
      slot = 3
      document.querySelectorAll('.slide')[slides].classList.add('showing')
      e.classList.remove('showing')
    } else {
      slot--
      e.previousElementSibling.classList.add('showing')
      e.classList.remove('showing')
    }
  })

  btn[1].addEventListener('click', function (e) {
    if (play) {
      clearInterval(play)
    }
    var e = document.querySelector('.showing')

    if (slot == slides) {
      slot = 0
      document.querySelectorAll('.slide')[0].classList.add('showing')
      e.classList.remove('showing')
    } else {
      slot++
      e.nextElementSibling.classList.add('showing')
      e.classList.remove('showing')
    }
  })

  function autoPlay() {
    e = document.querySelector('.showing')
    if (slot == slides) {
      slot = 0
      document.querySelectorAll('.slide')[0].classList.add('showing')
      e.classList.remove('showing')
    } else {
      slot++
      e.nextElementSibling.classList.add('showing')
      e.classList.remove('showing')
    }
  }

  var play = setInterval(autoPlay, 5000)


});