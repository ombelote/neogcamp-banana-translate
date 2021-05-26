var btnTranslate = document.querySelector("#btn-translate");
var txtbox = document.querySelector("#txt-box")

function clickHandler(){
    console.log("input" , txtbox.value)
    console.log("clicked");
};

btnTranslate.addEventListener("click", clickHandler)