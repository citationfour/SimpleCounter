//variables
var counter = 0;

//innerHTML
const counterBox = document.getElementById("counternumber-box");

//functions
function increase() {
    counter ++;
    counterBox.innerHTML = counter;
    console.log(counter);
}

function decrease() {
    counter --;
    counterBox.innerHTML = counter;
    console.log(counter);
}