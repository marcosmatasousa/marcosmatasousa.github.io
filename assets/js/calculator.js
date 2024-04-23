display = document.getElementById("display");

function calculate(){
    result = eval(display.innerHTML);
    display.innerHTML = result;
}

function updateDisplay(item){
    // Appends every entry to the expr till the user press the equal button
    if (item === '='){
        calculate()
    }
    else{
        display.innerHTML += item
    }
}

function C(){
    // Cleans the display
    display.innerHTML = "";
}

function CE(){
    // Deletes de last user entry
    display.innerHTML = display.innerHTML.slice(0, -1);
}