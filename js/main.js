$(".js-preloader").preloadinator({
  minTime: 2800,
  scroll: false,
});
$(document).ready(function () {
  "use strict";

  /*------------------------------------------
                       Video Player
     --------------------------------------------*/
  $(".player").mb_YTPlayer({
    containment: "#video-wrapper",
    mute: true,
    autoplay: true,
    showControls: false,
    quality: "hd720",
  });

  /*------------------------------------------
              Magnific popup
     --------------------------------------------*/
  $(".popup-youtube").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  $(".project-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
  });

  /*------------------------------------------
               Contact map
    --------------------------------------------*/
  function map() {
    if ($("#mapid").length > 0) {
      var lat = $("#mapid").data("lat");
      var lang = $("#mapid").data("lang");
      var mymap = L.map("mapid").setView([lat, lang], 20);
      L.tileLayer(
        "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
        {
          maxZoom: 18,
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery Â© <a href="https://www.mapbox.com/">Mapbox</a>',
          id: "mapbox.streets",
        }
      ).addTo(mymap);

      var marker = "<img src='images/map-marker.png'>";
      var popup = L.popup()
        .setLatLng([lat, lang])
        .setContent(marker)
        .openOn(mymap);
    }
  }
  map();

  /*-------------------------------------------------
                    rating stars in reviews 
        
    /*-------------------------------------------------*/

  var rateLine = $(".contact-form__rate-bx"),
    rateActual = $(".rate-actual");

  rateLine.find("i").on("hover", function () {
    var indexStar = $(this).index();
    for (var j = 0; j <= 9; j++) {
      rateLine.find("i:lt(" + indexStar + 1 + ")").addClass("active");
      rateLine.find("i:gt(" + indexStar + ")").removeClass("active");
    }
  });

  rateLine.find("i").on("click", function () {
    var indexStar = $(this).index();
    for (var j = 0; j <= 9; j++) {
      rateLine.find("i:lt(" + indexStar + 1 + ")").addClass("selected");
      rateLine.find("i:gt(" + indexStar + ")").removeClass("selected");
    }
    rateActual.text(indexStar + 1);
  });

  rateLine.on("mouseout", function () {
    rateLine.find("i").removeClass("active");
  });
});

/*------------------------------------------
         Scroll bottom navigation
--------------------------------------------*/
$(".scroll-link").on("click", function () {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        600
      );
      return false;
    }
  }
});
/*------------------------------------------
         Hamburger Menu
--------------------------------------------*/
var $window = $(window),
  $menutog = $("#menu-toggle");

// Run On Page Load
$window.on("load", function () {
  //Sidebar open
  $("#menu-toggle").on("click", function (event) {
    $(this).toggleClass("active");
    $("#menu-left").toggleClass("open");
    $("#menu-right").toggleClass("open");
  });
  /*------------------------------------------
                   Slider
      --------------------------------------------*/
  //Hero slider
  $(".hero-slider-wrapper").owlCarousel({
    loop: true,
    nav: true,
    navText: [
      "<i class='ion-ios-arrow-thin-left'></i>",
      "<i class='ion-ios-arrow-thin-right'></i>",
    ],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".hero-slider-wrapper .owl-nav").addClass("container");

  var selector = $(this).attr("data-filter");
  jQuery(".project-list").isotope({
    filter: selector,
  });

  /*----------------------------------------
            Counter Up
    -----------------------------------------*/
  //Counter animation
  $(".single-counter-box").appear(function () {
    var element = $(this);
    var timeSet = setTimeout(function () {
      if (element.hasClass("single-counter-box")) {
        element.find(".counter-value").countTo();
      }
    });
  });
});

/*----------------------------------------
          Scroll to top
  ----------------------------------------*/

//Back To Top
function BackToTop() {
  $(".scrolltotop").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 600) {
      $(".scrolltotop").fadeIn();
    } else {
      $(".scrolltotop").fadeOut();
    }
  });
}
BackToTop();

/*------------------------------------------
                 Parallax Hero  
--------------------------------------------*/
$(".parallax-nav li a").on("click", function () {
  $(".parallax-nav li").removeClass("active");
  $(this).parent().toggleClass("active");
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        500
      );
      return false;
    }
  }
});
/*------------------------------------------
                Slider 
--------------------------------------------*/
$(".single-projet-view").owlCarousel({
  items: 1,
  margin: 0,
  nav: false,
  dots: true,
  loop: true,
  autoplay: true,
  autoplaySpeed: 1500,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
//Testimonial owl carousel
$(".hero-testimonial-carousel").owlCarousel({
  items: 2,
  margin: 0,
  nav: false,
  dots: true,
  loop: true,
  autoplay: true,
  autoplaySpeed: 1500,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
//product owl carousel
$(".product-carousel").owlCarousel({
  items: 4,
  margin: 30,
  nav: false,
  dots: true,
  loop: true,
  autoplay: true,
  autoplaySpeed: 1500,
  autoplayTimeout: 3000,
  responsive: {
    320: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

//Testimonial Slider
$(".testimonial-wrapper").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='ion-ios-arrow-thin-left'></i>",
    "<i class='ion-ios-arrow-thin-right'></i>",
  ],
  dots: false,
  autoplay: true,
  autoplaySpeed: 1500,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

//Testimonial Slider
$(".partners-wrapper").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 1500,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
});

//Team Slider
$(".team-wrapper").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
//Project Details Slider
$(".project-details-slider-wrap").owlCarousel({
  loop: true,
  nav: true,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

/*-------------------------------------
            Footer Accordian
    -----------------------------------*/
$(".nav h3").on("click", function () {
  $(this).parent(".nav").toggleClass("open");
});

/*-------------------------------------
            shortcode starts
    -----------------------------------*/
$(".shortcode-wrapper").owlCarousel({
  items: 2,
  margin: 30,
  nav: false,
  dots: true,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

/*-------------------------------------------------------------------------------
      Navbar 
    -------------------------------------------------------------------------------*/
var nav_offset_top = $("header").height() + 50;

function navbarFixed() {
  if ($(".menu-area-one").length) {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= nav_offset_top) {
        $(".menu-area-one").addClass("navbar_fixed");
      } else {
        $(".menu-area-one").removeClass("navbar_fixed");
      }
    });
  }
}
navbarFixed();
/*-------------------------------------
                 Fixed Navbar
    ----------------------------------------*/
function navbarFixed() {
  if ($(".ham-menu").length) {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 600) {
        $(".ham-box").addClass("ham-bg-dark");
      } else {
        $(".ham-box").removeClass("ham-bg-dark");
      }
    });
  }
}
navbarFixed();

/*-------------------------------------
                portfolio isotope
    ----------------------------------------*/
$(".project-filter li").on("click", function () {
  $(".project-filter li").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr("data-filter");
  $(".project-list").isotope({
    filter: selector,
  });
});
/*-------------------------------------
                Full screen Search
    ----------------------------------------*/

$(function () {
  $("#searchBtn").on("click", function () {
    $("#search").addClass("open");
    $("#search_element").focus();
  });
  $(".close").on("click", function () {
    $("#search").removeClass("open");
  });
});

/*-------------------------------------------------------------------------------
              Portfolio carousel with filter
    -------------------------------------------------------------------------------*/
$(".filter-project-carousel").owlCarousel({
  dots: false,
  nav: true,
  margin: 30,
  smartSpeed: 250,
  responsiveRefreshRate: 0,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

$(".filter-project-carousel2").owlCarousel({
  dots: false,
  nav: true,
  margin: 30,
  smartSpeed: 250,
  responsiveRefreshRate: 0,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    768: {
      items: 2,
    },
  },
});

//Filter Carousel
$(".js-filter-carousel li a").on("click", function () {
  $(".js-filter-carousel .active").removeClass("active");
  $(this).closest("li").addClass("active");
  var selector = $(this).attr("data-filter");
  $(".filter-project-carousel").fadeOut(300);
  $(".filter-project-carousel").fadeIn(300);
  setTimeout(function () {
    $(".filter-project-carousel .owl-item").hide();
    $(selector).closest(".filter-project-carousel .owl-item").show();
  }, 300);
  return false;
});

/*---------------------------------------
            Slick slider with zoom
        -----------------------------------------*/
// SLICK
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  arrows: false,
  focusOnSelect: true,
  /*nextArrow: '<i class="ion-ios-arrow-right slick-next"></i>',
        prevArrow: '<i class="ion-ios-arrow-left  slick-prev"></i>',*/
});

// ZOOM
$(".ex1").zoom();

// STYLE GRAB
$(".ex2").zoom({
  on: "grab",
});

// STYLE CLICK
$(".ex3").zoom({
  on: "click",
});

// STYLE TOGGLE
$(".ex4").zoom({
  on: "toggle",
});

jQuery(document).ready(function ($) {
  /*------------------------------------------
                     Product quantity
    --------------------------------------------*/

  var quantitiy = 0;
  $(".quantity-right-plus").on("click", function (e) {
    e.preventDefault();
    var quantity = parseInt($(this).parent().siblings(".qty-amt").val());
    $(this)
      .parent()
      .siblings(".qty-amt")
      .val(quantity + 1);
  });
  $(".quantity-left-minus").on("click", function (e) {
    e.preventDefault();
    var quantity = parseInt($(this).parent().siblings(".qty-amt").val());
    if (quantity > 0) {
      $(this)
        .parent()
        .siblings(".qty-amt")
        .val(quantity - 1);
    }
  });

  /*------------------------------------    
         Shopping Cart 
    --------------------------------------*/

  $(".shop-cart").on("click", function () {
    $(".shopping__cart").addClass("shopping__cart__on");
    $(".body__overlay").addClass("is-visible");
  });
  $(".offsetmenu__close__btn").on("click", function () {
    $(".shopping__cart").removeClass("shopping__cart__on");
    $(".body__overlay").removeClass("is-visible");
  });

  /*------------------------
         price range slider
    --------------------------*/
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });

  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );

  /*------------------------
       Category menu Activation
    --------------------------*/
  $(".category-sub-menu li.has-sub > a").on("click", function () {
    $(this).removeAttr("href");
    var element = $(this).parent("li");
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
      element.find("ul").slideUp();
    } else {
      element.addClass("open");
      element.children("ul").slideDown();
      element.siblings("li").children("ul").slideUp();
      element.siblings("li").removeClass("open");
      element.siblings("li").find("li").removeClass("open");
      element.siblings("li").find("ul").slideUp();
    }
  });
  /*-----------------------------
        Dropdown Select option
    -------------------------------*/
  $(".filter-menu a").on("click", function () {
    $(this).parent().parent().prev().html($(this).html());
  });
});
