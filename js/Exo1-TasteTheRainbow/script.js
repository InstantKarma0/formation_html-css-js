const truc = document.getElementById("test");
const bidule = document.ge
const div = document.querySelector("div");

function randomGen(min, max) {

    return Math.random() * (max - min) + min;

}

function changement() {
    setInterval(() => {
        machin();
    }, 300);

}



function machin() {
    div.style.background = "rgb(" + randomGen(0,256) + ", " + randomGen(0,256) + ", " + randomGen(0,256) + ")";
    truc.style.fontSize = randomGen(50,300)+"px";
    truc.style.color = "rgb(" + randomGen(0,256) + ", " + randomGen(0,256) + ", " + randomGen(0,256) + ")";
    
}


truc.addEventListener("mouseover", changement);