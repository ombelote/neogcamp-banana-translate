var btnTranslate = document.querySelector("#btn-translate");
var txtbox = document.querySelector("#txt-box")
// var textbox = document.querySelector("textarea")
// var textbox = document.querySelector('.btn-primary')
// var textbox = document.querySelector('#input-btn')
// var textbox = document.querySelector('input[name="translator"]')
var output = document.querySelector("#output")

function getTranslationURL(txtbox){
    return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"+"?"+"text="+txtbox.value;
};

function errorHandler(error){
    console.log('error occured:', error);
    alert('something wrong with ur server, try again after some time');
};

function clickHandler(){
    // output.innerHTML = "arrrrr " + txtbox.value;
    fetch(getTranslationURL(txtbox))
    .then(response =>response.json())
    .then(json=>{
        var translated_text= json.contents.translated;
        output.innerHTML=translated_text;
        })
    .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickHandler)
// Fething a api through javascript
// url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text= I am Om
// fetch(url).them(response=>response.json()).then(json=>console.log(json))
