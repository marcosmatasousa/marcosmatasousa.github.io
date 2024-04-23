// Starting variables of the game
table = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var show_turn = document.getElementById('turn');
turn = 'X';
document.getElementById('X_score_number').innerHTML = 0;
document.getElementById('O_score_number').innerHTML = 0;

document.getElementById("X_score").style.borderBottom = "2px solid rgb(29,185,84)";

// Function responsible for updating the game
function makePlay(x, y){
    var validPlay = false;
    if(table[x][y] === 0){
        table[x][y] = turn;
        var img = document.createElement("img"); 
        img.src = `static/${turn}_play.png`;
        document.getElementById(`[${x}, ${y}]`).appendChild(img);
        validPlay = true;
    }
    if(validPlay){
        checkStatus();
    }
}

// Updates the score of the game
function updateScore(){
    var aux = document.getElementById(`${turn}_score_number`).innerHTML;
    document.getElementById(`${turn}_score_number`).innerHTML = parseInt(aux) + 1;
}

// Clears the board of the game
function clearBoard(){
    table = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    
    for (var i = 0; i < table.length; i++) {
        for (var j = 0; j < table[i].length; j++) {
            document.getElementById(`[${i}, ${j}]`).innerHTML = "";
        }
    }
}

function checkWin(){
    // Checking every row
    for(let i = 0; i < table.length; i++){
        var row = table[i];
        if (allEqual(row)){
            return true;
        }
    }

    // Checking every column
    for(let i = 0; i < table.length; i++){
        var column = [table[0][i], table[1][i], table[2][i]];
        if (allEqual(column)){
            return true;
        }
    }

    // Checking the diagonals
    var diag1 = [table[0][0], table[1][1], table[2][2]];
    var diag2 = [table[0][2], table[1][1], table[2][0]];
    if (allEqual(diag1) || allEqual(diag2)){
        return true;
    }
    return false;
}

// Checks whether some player has won or the game ended with draw
function checkStatus(){
    if(checkWin()){
        updateScore();
        clearBoard();
    }
    else if(checkDraw()){
        clearBoard();
    }
    changeTurn();
}
    

function checkDraw(){
    for(let i = 0; i < table.length; i++){
        if(table[i].includes(0)){
            return false;
        }
    }
    return true
}

function changeTurn(){
    if(turn === 'X'){
        turn = 'O';
        document.getElementById("O_score").style.borderBottom = "2px solid rgb(29,185,84)";
        document.getElementById("X_score").style.borderBottom = "1px solid rgb(85, 84, 84)";
    }
    else{
        turn = 'X';
        document.getElementById("X_score").style.borderBottom = "2px solid rgb(29,185,84)";
        document.getElementById("O_score").style.borderBottom = "1px solid rgb(85, 84, 84)";
    }
}

// Verifies if every item on a row are the same
function allEqual(row){
    return row.every(function(element) {
        return element === row[0] && row[0] !== 0;
    })
}
