

if(window.matchMedia("prefers-color-scheme:light").matches){

  documentElement.setAttribute("light", true)

}


/*======== Preloader ========*/



var preloader = document.getElementById("loading");
function myFunction(){
        preloader.style.display = 'none';
    };
    setTimeout(myFunction,3000);



var header = document.getElementById("nav");
var btns = header.getElementsByClassName("navlist");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}



function home() {
  document.getElementById("home").className = "home-main-site pt-page page-active";
  document.getElementById("about").classList.remove("page-active");
  document.getElementById("resume").classList.remove("page-active");
  document.getElementById("contact").classList.remove("page-active");
  document.getElementById("portfolio").classList.remove("page-active");
}

function about() {
  document.getElementById("about").className = "about-main-site pt-page page-active";
  document.getElementById("resume").classList.remove("page-active");
  document.getElementById("home").classList.remove("page-active");
  document.getElementById("contact").classList.remove("page-active");
  document.getElementById("portfolio").classList.remove("page-active");
}

function resume() {
  document.getElementById("resume").className = "main-resume pt-page page-active";
  document.getElementById("home").classList.remove("page-active");
  document.getElementById("about").classList.remove("page-active");
  document.getElementById("contact").classList.remove("page-active");
  document.getElementById("portfolio").classList.remove("page-active");
}


function contact() {
  document.getElementById("contact").className = "contact-main-site pt-page page-active";
  document.getElementById("home").classList.remove("page-active");
  document.getElementById("about").classList.remove("page-active");
  document.getElementById("resume").classList.remove("page-active");
  document.getElementById("portfolio").classList.remove("page-active");
  }
function portfolio() {
  document.getElementById("portfolio").className = "port-main-site pt-page page-active";
  document.getElementById("home").classList.remove("page-active");
  document.getElementById("about").classList.remove("page-active");
  document.getElementById("resume").classList.remove("page-active");
  document.getElementById("contact").classList.remove("page-active");
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




var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};
 
TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
 
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
 
  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
 
  var that = this;
  var delta = 300 - Math.random() * 100;
 
  if (this.isDeleting) { delta /= 2; }
 
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
 
  setTimeout(function() {
    that.tick();
  }, delta);
};
 
window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

