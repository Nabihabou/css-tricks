$(window).scroll(function() {
  var $hero2 = $(".hero2");
  var window_offset = $hero2.offset().top - $(window).scrollTop();
  console.log(window_offset);

  if (window_offset <= 1) {
    console.log('to top');
    $(".header").addClass('animate');
  } else {
    $(".header").removeClass('animate');
  }
});
