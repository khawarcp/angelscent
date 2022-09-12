$(".menu-bar").click(function () {
  $(".header-row").slideToggle();
  $("body").toggleClass("menu-intro");
});
$(".menu-intro::before").click(function () {
  $(".header-row").slideToggle();
  $("body").removeClass("menu-intro");
});
jQuery(document).ready(($) => {
  $('.quantity-box').on('click', '.plus', function (e) {
    let $input = $(this).prev('input');
    let val = parseInt($input.val());
    $input.val(val + 1).change();
  });

  $('.quantity-box').on('click', '.minus',
    function (e) {
      let $input = $(this).next('input');
      var val = parseInt($input.val());
      if (val > 1) {
        $input.val(val - 1).change();
      }
    });
});