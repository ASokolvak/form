$(function () {

  
  $('.reviews__items').slick({
    dots:false,
    // arrows: true,
    slidesToShow: 3,
    // nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="next arrow"></button>',


    // prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt="next arrow"></button>',
    // fade: true
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.header__burger, .header__item-link').on('click', function () {
    $('.header__burger,.header__menu, .header__item-link').toggleClass('active');
    
    $('body').toggleClass('lock');
  });
  $(".menu a, .logo, .header__btn, .program__btn").on("click", function (e) {

    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });
  

  var countDownDate = new Date("July 12, 2021 00:00:00").getTime();

 var countDownFunction = setInterval(function () {
   var now = new Date().getTime();
   var distance = countDownDate - now;
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   document.getElementById("timer").innerHTML = 
     "0" + days + " | " + hours + " | " + minutes + " | " + seconds ;

   if (distance < 0) {
     clearInterval(countDownFunction);
     document.getElementById("timer").innerHTML = "Время истекло";
   } 

 }, 1000)
  var countDownDate = new Date("July 12, 2021 00:00:00").getTime();

  var countDownFunction = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer1").innerHTML =
     "0" + days + " | " + hours + " | " + minutes + " | " + seconds;

    if (distance < 0) {
      clearInterval(countDownFunction);
      document.getElementById("timer1").innerHTML = "Время истекло";
    }

  }, 1000)

  

});