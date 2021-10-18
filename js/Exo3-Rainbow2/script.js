const color = ['red','orange','yellow','green','blue','indigo','violet'];
var test = document.querySelectorAll(".test");
var uwu = document.getElementById("truc");


var i = 0;

function truc(index) {
    var c = index;
    uwu.style.border = "4px solid "+ color[c];  

    for (let v = 0; v < test.length; v++) {
        
        
        test[v].classList.toggle(color[c]);
        c++;
        if (c >= 7) {
            c = 0;
        }
        
        test[v].classList.toggle(color[c])
        
    }
}

function machin() {
    setInterval(() => {
        truc(i);
        i++;
        if (i >= 7) {
            i = 0;
        }
    }, 80);
}

//const bidule = document.getElementById("lel");
//bidule.addEventListener("click", machin());