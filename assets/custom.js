$(".menu-bar").click(function () {
  $(".header-row").slideToggle();
  // $("body").addClass("menu-intro");
});
// $(".menu-intro").click(function () {
//   $(".header-row").slideToggle();
//   $("body").removeClass("menu-intro");
// });
// if ($(window).width() < 767) {
// $(document).bind("click", function (e) {
//   var $clicked = $(e.target);
//   if (!$clicked.parents().hasClass("menu-intro"))
//     $(".header-row").slideUp();
//   $("body").removeClass("menu-intro");
// });
// });
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