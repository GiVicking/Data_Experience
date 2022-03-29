(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

/********************************************************************************* */
// Floating Action Button
const elemsBtns = document.querySelectorAll(".fixed-action-btn");
const floatingBtn = M.FloatingActionButton.init(elemsBtns, {
    direction: "left",
    hoverEnabled: false
});

// Navbar
const elemsDropdown = document.querySelectorAll(".dropdown-trigger");
const instancesDropdown = M.Dropdown.init(elemsDropdown, {
    coverTrigger: false
});
const elemsSidenav = document.querySelectorAll(".sidenav");
const instancesSidenav = M.Sidenav.init(elemsSidenav, {
    edge: "right"
});
/******************************************************************************************************* */
//aos scroll animations
AOS.init();
// end of aos

//fade in animations
anime({
  targets: '.header h2',
  delay: 500,
  opacity: 1
});

anime({
  targets: '.header h2 span:first-of-type',
  delay: 1000,
  opacity: 1
});

anime({
  targets: '.header h2 span:nth-of-type(2)',
  delay: 1500,
  opacity: 1,
});
anime({
  targets: '.header h2 span:nth-of-type(3)',
  delay: 1500,
  opacity: 1,
});

anime({
  targets: '.header p',
  delay: 2000,
  opacity: 1
});

anime({
  targets: '.cta',
  delay: 2500,
  bottom: '2em'
});//end fade in animations



//window scroll animations
var prev = 0;
var $window = $(window);
var nav = $('nav');

$window.scroll(function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('nav-scroll', scrollTop > prev);
  prev = scrollTop;
});

//opacity on scroll
var target = $('header h2, header p');
var targetHeight = target.outerHeight();

$window.scroll( function(e) {
    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
    if (scrollPercent >= 0) {
        target.css('opacity', scrollPercent);
    }
});//end of opacity on scroll

//hover on social media
$( ".icons a" ).hover(
  function() {
    $(this).siblings().addClass("hover");
  }, function() {
    $(this).siblings().removeClass("hover");
  }
);


//Bedges slideshow
var slideIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("slide-image");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds
}
