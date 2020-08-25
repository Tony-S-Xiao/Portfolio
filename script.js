/**
 * placeholder script file
 */

let size = 10;

setInterval(function(){ 
    size++;
    let curr = document.getElementById("wow");
    let string = curr.style.fontSize;

    console.log(string);

    curr.style.fontSize = size + "px";
 }, 1000)
