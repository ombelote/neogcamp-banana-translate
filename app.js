var btnTranslate = document.querySelector("#btn-translate");
var txtbox = document.querySelector("#txt-box")
// var textbox = document.querySelector("textarea")
// var textbox = document.querySelector('.btn-primary')
// var textbox = document.querySelector('#input-btn')
// var textbox = document.querySelector('input[name="translator"]')
var output = document.querySelector("#output")
function clickHandler(){
    output.innerHTML = "arrrrr " + txtbox.value;
};

btnTranslate.addEventListener("click", clickHandler)