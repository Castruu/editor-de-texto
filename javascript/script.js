
const text = document.getElementById("result");
const typed = document.getElementById("text");

typed.oninput = changeText;

function changeText() {
    text.innerText = typed.value;
    text.style.textAlign = "justify";
    text.style.color = "black";
}

function capitalize() {
    transform("capitalize")
    
}

function lowerCase() {
    transform("lowercase")
}

function upperCase() {
    transform("uppercase")
}

function bold() {
    transform("none")
    text.style.fontWeight == "bold" ? text.style.fontWeight = "normal" : text.style.fontWeight = "bold";
}

function italic() {
    transform("none")
    text.style.fontStyle == "italic" ? text.style.fontStyle = "normal" : text.style.fontStyle = "italic";
}

function none() {
    transform("none")
    text.style.fontWeight = "normal";
    text.style.fontStyle = "normal";
}

function transform(edit) {
    let style = text.style.textTransform;
    style == edit ? text.style.textTransform = "none" : text.style.textTransform = edit;
}