$(document).ready(function () {
  // aos
  AOS.init();

  // gotop
  $(".gotop").hide();

  $(".gotop").click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".gotop").fadeIn();
    } else {
      $(".gotop").fadeOut();
    }
  });

  // header fix
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $("#header").addClass("fix");
    } else {
      $("#header").removeClass("fix");
    }
  });

  // mgnb
  $(".ham").click(function () {
    $(".mgnb_wrap").animate({
      left: "0%",
    });
  });

  $(".mgnb_wrap .btn_close").click(function () {
    $(".mgnb_wrap").animate({
      left: "100%",
    });
  });

  // main_banner
  const mb = new Swiper(".mb", {
    speed: 1500,
    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
});
