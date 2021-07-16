$(document).ready(function () {
  if (screen.width < 768) {
    $(".menu-burger").click(function (event) {
      $(".menu-burger, .mobile-menu").toggleClass("active");
      $("body").toggleClass("lock");
      $(".mobile-menu").removeClass("hide");
    });

    $(".menu__item").click(function (event) {
      $(".menu-burger, .mobile-menu").toggleClass("active");
      $("body").toggleClass("lock");
    });
  }

  function openPopup(button, popupFade) {
    $(button).click(function () {
      $(popupFade).fadeIn();
      $('body').addClass('lock')
      return false;
    });
  }

  function closePopup(popupFade, popup) {
    $(popupFade).click(function (e) {
      if ($(e.target).closest(popup).length == 0) {
        $(this).fadeOut();
        $('body').removeClass('lock')
      }
    });
  }

  openPopup(".link-contacts", ".popup-contacts__fade");
  openPopup(".button-site-creating", ".popup-site-creating__fade");
  openPopup(".link-about", ".popup-about__fade");
  openPopup(".how-to-pay",".popup-how-to-pay__fade");

  closePopup(".popup-contacts__fade", ".popup-contacts");
  closePopup(".popup-site-creating__fade", ".popup-site-creating");
  closePopup(".popup-about__fade", ".popup-about");
  closePopup(".popup-how-to-pay__fade", ".popup-how-to-pay");

  // tab content

  $(".operator-tariffs-tab-pannel__item").click(function() {
    $(".operator-tariffs-tab-pannel__item").removeClass("active").eq($(this).index()).addClass("active")
    $(".operator-tariffs-tab-pannel__button").removeClass("active").eq($(this).index()).addClass("active")
    $(".operator-tariffs__tab-content").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

  // tab content

});

 

 