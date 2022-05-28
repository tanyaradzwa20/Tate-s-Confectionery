$( "li" ).hover(
    function() {
        $(this).find("span").stop().animate({
        width:"100%",
        opacity:"1",
      }, 400, function () {
      })
    }, function() {
        $(this).find("span").stop().animate({
        width:"0%",
        opacity:"0",
      }, 400, function () {
      })
    }
  );

// carousel
$('.slick-carousel').slick({
  infinite: true,
  slidesToShow: 4, // Shows a three slides at a time
  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  arrows: true, // Adds arrows to sides of slider
  dots: true // Adds the dots on the bottom
});

// accordion

/* attached to jquery */
/* attached to Bootstrap.js */

//******ACCORDION TOGGLE - collapse/closed shows plus, and open shows minus

$(document).ready(function(){
  $('.main div span').click(function(){
    $(this).parent().next().slideToggle();
    $('.content').not($(this).parent().next()).slideUp();
    $(this).removeClass('arrow-up').addClass('arrow-down');
    $('div span').not($(this)).removeClass('arrow-down').addClass('arrow-up');
  });
});