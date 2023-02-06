$(function () {
    
    $(".slider-arrows").html("");

    $("a[href^='#']").click(function () {
      var _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });

      return false;
    });

    $(".click-for-video").click(function () {
      this.style.display = "none";
      $("div.youtube").css("display", "block");
      $("iframe.youtube").prop("src", "video.mp4");
    });

    now = new Date();
    var perem = (24 - now.getHours()) * 3600;
    $(".el-timer").attr("data-timer", perem);
    $(".el-timer").TimeCircles({
      animation: "smooth",
      bg_width: 1,
      fg_width: 0.032,
      circle_bg_color: "#ebf0f7",
      time: {
        Days: {
          text: "Days",
          color: "#ffc000",
          show: false,
        },
        Hours: {
          text: "часов",
          color: "#ffc000",
          show: true,
        },
        Minutes: {
          text: "минут",
          color: "#ffc000",
          show: true,
        },
        Seconds: {
          text: "секунд",
          color: "#ffc000",
          show: true,
        },
      },
    });


    $(".s10__slider").slick({
      dots: true,
      dotsClass: "header-dots",
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      prevArrow:
        '<img class="slider-s10_left" <img src="img/icon-arrow-left.png" alt="">',
      nextArrow:
        '<img class="slider-s10_right" src="img/icon-arrow-right.png" alt="">',
    });
  });