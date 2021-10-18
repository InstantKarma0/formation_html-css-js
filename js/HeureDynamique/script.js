timeElapsed = Date.now();
date = new Date(timeElapsed);

// INIT

jour = correcteur0(date.getDate());
mois = correcteur0(date.getMonth());
annee = correcteur0(date.getFullYear());

hours = correcteur0(date.getHours());
minutes = correcteur0(date.getMinutes());
secondes = correcteur0(date.getSeconds());
//secondes++;


// EO INIT

title = document.querySelector("h1");

formatedDate = `${jour}/${mois}/${annee} , ${hours}:${minutes}:${secondes}`
title.innerText = formatedDate;


function correcteur0(truc) {
    if (truc < 10) {
        return "0" + truc;
    }
    else return truc;
}

async function TheFunction() {
    
    secondes++;
    secondes = correcteur0(secondes)

    // Cas où secondes = 60
    // On remet secondes a 0 et on incrémente minutes
    if (secondes == 60) {
        secondes = 0;
        minutes++;
        minutes = correcteur0(minutes);
    }
    

    // Cas où minutes = 60
    // On remet minutes a 0 et on incrémente heures
    if (minutes == 60) {
        minutes = 0;
        hours++;
        
    }
    


    // Cas où heures = 24
    // On remet heures a 0 et on incrémente jour
    if (hours == 24) {
        hours = 0;
        jour++;
    }
    formatedDate = `${jour}/${mois}/${annee} , ${hours}:${minutes}:${secondes}`
    title.innerText = formatedDate;
    
}


var td = Date.now();
var tt;
setInterval(() => {
    //tt = Date.now()
    TheFunction();
    //console.log(tt-td)
    //td = tt
}, 980);

// TODO L'heure prend du retard sur l'horloge de l'ordinateur

