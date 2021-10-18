

var truc = document.getElementById("booton");

function randomGen(min, max) {

    return Math.random() * (max - min) + min;

}

function thefonction() {
    truc.style.transform = "translate("+randomGen(0,1200)+"px, "+randomGen(0,600)+"px)";
}



truc.addEventListener("mouseover", thefonction);