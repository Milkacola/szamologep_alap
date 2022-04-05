window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem);
}

function $(elem) {
    return document.querySelectorAll(elem);
}

function init(){
    billentyuzet();

    for (let index = 0; index < 10; index++) {
        $("#gombSz")[index].addEventListener("click", gombKattint);
    }


}

function billentyuzet(){
    var txt="";
    for (let index = 0; index < 10; index++) {
        txt += `<button id="gombSz">${[index]}</button>`
        
    }
    $(".szamok")[0].innerHTML=txt;
    console.log(txt);
}

function gombKattint(){
    gombIndex = event.target.id;
    
    CLASS("kijelzo")[0].innerHTML+=gombIndex;
    event.target.removeEventListener("click", gombKattint);
}

function megjelenit(){
    
   
}