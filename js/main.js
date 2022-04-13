/*======== Window Load Function ========*/
// $(window).on('load', function() {

//     /*======== Preloader ========*/
//     $(".loader").fadeOut();
//     $(".preloader").delay(1000).fadeOut();

/*======== Preloader ========*/

var preloader = document.getElementById("loading");
function myFunction(){
        preloader.style.display = 'none';
    };
    setTimeout(myFunction,3000);

/*======== active link ========*/

// $('div header nav a').on('click', function(){
//     $(this).addClass('active').siblings().removeClass('active')
// })

// const activePage = window.location.pathname;
//  const navlink = document.querySelectorAll('div header nav a').forEach(link => {

//       if(link.href.includes(`${activePage}`)){
//             link.classList.add('active').siblings.removeClass('active');
//         }
      
//      });
//     console.log(activePage);       

 /*======== Active Current Link ========*/
//  $('.navbar a').on('click',function() {
//     if($('.navbar.on').length) {
//         $('.navbar').removeClass('on');
//     }
// });

var header = document.getElementById("nav");
var btns = header.getElementsByClassName("navlist");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// var head = document.getElementById("nav");
// var btn = head.getElementsByClassName("pt-page");
// for (var i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("page-active");
//   if (current.length > 0) { 
//     current[0].className = current[0].className.replace(" page-active", "");
//   }
//   this.className += " page-active";
//   });
// }

// const element = document.getElementById("nav");

// element.addEventListener("click", home, about, resume, contact);

function home() {
  document.getElementById("home").className = "home-main-site pt-page page-active";
  document.getElementById("about").classList.remove("page-active");
  document.getElementById("resume").classList.remove("page-active");
  document.getElementById("contact").classList.remove("page-active");
  
}

function about() {
  document.getElementById("about").className = "about-main-site pt-page page-active";
  document.getElementById("resume").classList.remove("page-active");
  document.getElementById("home").classList.remove("page-active");
  document.getElementById("contact").classList.remove("page-active");
}

function resume() {
  document.getElementById("resume").className = "main-resume pt-page page-active";
  document.getElementById("home").classList.remove("page-active");
  document.getElementById("about").classList.remove("page-active");
  document.getElementById("contact").classList.remove("page-active");
}


function contact() {
  document.getElementById("contact").className = "contact-main-site pt-page page-active";
  document.getElementById("home").classList.remove("page-active");
  document.getElementById("about").classList.remove("page-active");
  document.getElementById("resume").classList.remove("page-active");
  }

  function function1() {
    var x = document.getElementsByClassName('header');
    Array.from(x).forEach((x) => {
      if (x.style.display === "none") {
        x.style.display = "block";
        setTimeout(1000);
      } else {
        x.style.display = "none";
      }
    })
  }

// if( $('.navbar').length ) {
//     var $elements = $(".navbar"),
//         $filters = $('.navbar ');
//     $elements.isotope();

//     $filters.on('click', function(){
//         $filters.removeClass('active');
//         $(this).addClass('active');
//         var selector = $(this).data('filter');
//         $(".navbar").isotope({
//             filter: selector,
//             hiddenStyle: {
//                 transform: 'scale(.2) skew(30deg)',
//                 opacity: 0
//             },
//             visibleStyle: {
//                 transform: 'scale(1) skew(0deg)',
//                 opacity: 1,
//             },
//             transitionDuration: '.5s'
//         });
//     });
//}

