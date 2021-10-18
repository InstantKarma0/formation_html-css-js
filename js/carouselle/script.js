var slideIndex = 1;
var pause = 0;
var SliderDelay = 4000;
var waitingDelay = 2000;
var idInter = 0

delaySlider()
initSlider()

// AutoSlider
function delaySlider() {
    idInter = setInterval(autoSlider, SliderDelay);
}

async function autoSlider() {
    while (pause === 1) {  
        clearInterval(idInter);
        pause = 0;
        await sleep(waitingDelay);
        delaySlider();

    }
    showSlides(slideIndex += 1);
}


// AutoSlider Pause
function sleep(delay) {
    return new Promise(resolve => {
        setTimeout(() => {resolve();}, delay);
    });
}


// Next/previous controls
function plusSlides(n) {
    pause = 1;
    showSlides(slideIndex += n);
}


// Thumbnail image controls
function currentSlide(n) {
    pause = 1;
    showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
	  slides[i].className = slides[i].className.replace(" sactive", "");
  }
  for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].className += " sactive";
  dots[slideIndex-1].className += " active";
}

pause = 0;

async function initSlider(){
    await new Promise(r => setTimeout(r, 1));
    var dots = document.getElementsByClassName("dot");
    dots[0].className += " active";
}
