display = document.getElementById("result");

function calculate(){
    try{
        result = eval(display.innerHTML);
        display.innerHTML = result;
    }
    catch(error){
        display.innerHTML = 'Invalid Syntax'
    }

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
    if(display.innerHTML === 'Invalid Syntax'){
        C();
    }
    else{
        display.innerHTML = display.innerHTML.slice(0, -1);
    }
}