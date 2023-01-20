

// code to make a coin-flip as to which player goes first
function goesFirst () {
    let displayPlayer = Math.random();
    
    if (displayPlayer < 0.5 ) {
        xTurn = 1;
        document.getElementById("goesFirst").innerHTML = "X";
    }else {
        xTurn = 0;
        document.getElementById("goesFirst").innerHTML = "O";
    }
}

function goesFirstComputer () {
    let displayPlayer = Math.random();
    
    if (displayPlayer < 0.5 ) {
        xTurn = 1;
        document.getElementById("goesFirst").innerHTML = "X";
    }else {
        xTurn = 0;
        document.getElementById("goesFirst").innerHTML = "O";
        computer();
    }
}

//Code to set values to each square
//Code to tell the text boxes winning scenarios or tie
function playGame() {
    let topLeft = '';
    let topMiddle = '';
    let topRight = '';
    let middleLeft = '';
    let middleMiddle = '';
    let middleRight = '';
    let bottomLeft = '';
    let bottomMiddle = '';
    let bottomRight = '';

    topLeft = document.getElementById("topLeft").value;
    topMiddle = document.getElementById("topMiddle").value;
    topRight = document.getElementById("topRight").value;
    middleLeft = document.getElementById("middleLeft").value;
    middleMiddle = document.getElementById("middleMiddle").value;
    middleRight = document.getElementById("middleRight").value;
    bottomLeft = document.getElementById("bottomLeft").value;
    bottomMiddle = document.getElementById("bottomMiddle").value;
    bottomRight = document.getElementById("bottomRight").value;
    // Checking if "X" won and announcing if true
    if((topLeft == "X") && (topMiddle == "X") && (topRight =="X")) {
        document.getElementById("gameWinner").innerHTML = "Player X Won";
       // playAgain = 0;
    }
    else if ((middleLeft == "X") && (middleMiddle == "X") && (middleRight == "X")) {
        document.getElementById("gameWinner").innerHTML = "Player X Won";
       // playAgain = 0;
    }
    else if ((bottomLeft == "X") && (bottomMiddle == "X") && (bottomRight == "X")) {
        document.getElementById("gameWinner").innerHTML = "Player X Won";
    }
    else if ((topLeft == "X") && (middleLeft == "X") && (bottomLeft == "X")) {
        document.getElementById("gameWinner").innerHTML = "Player X Won";
       // playAgain = 0;
    }
    else if ((topMiddle == "X") && (middleMiddle == "X") && (bottomMiddle == "X")) {
        document.getElementById("gameWinner").innerHTML = "Player X Won";
      //  playAgain = 0;
    }
    else if ((topRight == "X") && (middleRight == "X") && (bottomRight == "X")) {
        document.getElementById("gameWinner").innerHTML = "Player X Won";
       // playAgain = 0;
    }
    else if ((topLeft == "X") && (middleMiddle == "X") && (bottomRight == "X")) {
        document.getElementById("gameWinner").innerHTML = "Player X Won";
       // playAgain = 0;
    }
    else if ((topRight == "X") && (middleMiddle == "X") && (bottomLeft == "X")) {
        document.getElementById("gameWinner").innerHTML = "Player X Won";
       // playAgain = 0;
    }
// checking if "O" won and announcing if true
    else if((topLeft == "O") && (topMiddle == "O") && (topRight =="O")) {
    document.getElementById("gameWinner").innerHTML = "Player O Won";
    //playAgain = 0;
    }
    else if ((middleLeft == "O") && (middleMiddle == "O") && (middleRight == "O")) {
    document.getElementById("gameWinner").innerHTML = "Player O Won";
    //playAgain = 0;
    }
    else if ((bottomLeft == "O") && (bottomMiddle == "O") && (bottomRight == "O")) {
    document.getElementById("gameWinner").innerHTML = "Player O Won";
    //playAgain = 0;
    }
    else if ((topLeft == "O") && (middleLeft == "O") && (bottomLeft == "O")) {
    document.getElementById("gameWinner").innerHTML = "Player O Won";
    //playAgain = 0;
    }
    else if ((topMiddle == "O") && (middleMiddle == "O") && (bottomMiddle == "O")) {
    document.getElementById("gameWinner").innerHTML = "Player O Won";
    //playAgain = 0;
    }
    else if ((topRight == "O") && (middleRight == "O") && (bottomRight == "O")) {
    document.getElementById("gameWinner").innerHTML = "Player O Won";
    //playAgain = 0;
    }
    else if ((topLeft == "O") && (middleMiddle == "O") && (bottomRight == "O")) {
    document.getElementById("gameWinner").innerHTML = "Player O Won";
    //playAgain = 0;
    }
    else if ((topRight == "O") && (middleMiddle == "O") && (bottomLeft == "O")) {
    document.getElementById("gameWinner").innerHTML = "Player O Won";
    //playAgain = 0;
}
// checking if game is a tie game
else if (( t1 == 'X' || t1 == 'O') &&
(t2 == 'X' || t2 == 'O') &&
(t3 == 'X' || t3 == 'O') &&
(t4 == 'X' || t4 == 'O') &&
(t5 == 'X' || t5 == 'O') &&
(t6 == 'X' || t6 == 'O') &&
(t7 == 'X' || t7 == 'O') &&
(t8 == 'X' || t8 == 'O') &&
(t9 == 'X' || t9 == 'O')) {
        document.getElementById('gameWinner').innerHTML = "No Winner <--> Tie Game"; 
}
}

// This code tells the program to input "X" or "O" based on whos turn and then flips
let xTurn = 1;
function clickTopLeft () {
    if (xTurn == 1 ) {
        document.getElementById("topLeft").value = "X";
        document.getElementById("topLeft").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's O's Turn!";
        xTurn = 0;
        
    }else {
        document.getElementById("topLeft").value = "O";
        document.getElementById("topLeft").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's X's Turn!";
        xTurn = 1;
        
    }
}
function clickTopMiddle () {
    if (xTurn == 1) {
        document.getElementById("topMiddle").value = "X";
        document.getElementById("topMiddle").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's O's Turn!";
        xTurn = 0;
    }else {
        document.getElementById("topMiddle").value = "O";
        document.getElementById("topMiddle").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's X's Turn!";
        xTurn = 1;
    }
}
function clickTopRight () {
    if (xTurn == 1) {
        document.getElementById("topRight").value = "X";
        document.getElementById("topRight").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's O's Turn!";
        xTurn = 0;
    }else {
        document.getElementById("topRight").value = "O";
        document.getElementById("topRight").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's X's Turn!";
        xTurn = 1;
    }
}
function clickMiddleLeft () {
    if (xTurn == 1) {
        document.getElementById("middleLeft").value = "X";
        document.getElementById("middleLeft").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's O's Turn!";
        xTurn = 0;
    }else {
        document.getElementById("middleLeft").value = "O";
        document.getElementById("middleLeft").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's X's Turn!";
        xTurn = 1;
    }
}
function clickMiddleMiddle () {
    if (xTurn == 1) {
        document.getElementById("middleMiddle").value = "X";
        document.getElementById("middleMiddle").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's O's Turn!";
        xTurn = 0;
    }else {
        document.getElementById("middleMiddle").value = "O";
        document.getElementById("middleMiddle").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's X's Turn!";
        xTurn = 1;
    }
}
function clickMiddleRight () {
    if (xTurn == 1) {
        document.getElementById("middleRight").value = "X";
        document.getElementById("middleRight").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's O's Turn!";
        xTurn = 0;
    }else {
        document.getElementById("middleRight").value = "O";
        document.getElementById("middleRight").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's X's Turn!";
        xTurn = 1;
    }
}
function clickBottomLeft () {
    if (xTurn == 1) {
        document.getElementById("bottomLeft").value = "X";
        document.getElementById("bottomLeft").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's O's Turn!";
        xTurn = 0;
    }else {
        document.getElementById("bottomLeft").value = "O";
        document.getElementById("bottomLeft").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's X's Turn!";
        xTurn = 1;
    }
}
function clickBottomMiddle () {
    if (xTurn == 1) {
        document.getElementById("bottomMiddle").value = "X";
        document.getElementById("bottomMiddle").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's O's Turn!";
        xTurn = 0;
    }else {
        document.getElementById("bottomMiddle").value = "O";
        document.getElementById("bottomMiddle").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's X's Turn!";
        xTurn = 1;
    }
}
function clickBottomRight () {
    if (xTurn == 1) {
        document.getElementById("bottomRight").value = "X";
        document.getElementById("bottomRight").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's O's Turn!";
        xTurn = 0;
    }else {
        document.getElementById("bottomRight").value = "O";
        document.getElementById("bottomRight").disabled = true;
        document.getElementById("playerTurn").innerHTML = "It's X's Turn!";
        xTurn = 1;
    }
}

// start/restart
function resetGame () {
    location.reload();
    document.getElementById("topLeft").value = '';
    document.getElementById("topMiddle").value = '';
    document.getElementById("topRight").value = '';
    document.getElementById("middleLeft").value = '';
    document.getElementById("middleMiddle").value = '';
    document.getElementById("middleRight").value = '';
    document.getElementById("bottomLeft").value = '';
    document.getElementById("bottomMiddle").value = '';
    document.getElementById("bottomRight").value = '';
    
}

// game clock 
let countVariable = setInterval(countUpCounter, 1000);
let totalSeconds = 0;
function countUpCounter () {
    ++totalSeconds;
    hour = Math.floor(totalSeconds/3600);
    minute = Math.floor((totalSeconds - hour * 3600) / 60);
    second = totalSeconds - (hour * 3600 + minute *60);
    if (hour < 10) 
        hour = "0" + hour;
    if (minute < 10)
        minute = "0" + minute;
    if(second < 10)
        second = "0" + second;
    
    document.getElementById("timeCount").innerHTML = hour + ":" + minute + ":" + second;   
}

// hoping this would get a random number and then fill the randomly selected textbox
// or if already full--re-run the function and repeat until an empty square appears
let randomPlay = Math.random * 9;
function computer () {

if((randomPlay == 1) && (topLeft == '') && (xTurn == 0)){
    document.getElementById("topLeft").value = "O";
}else if((randomPlay == 1) && (topLeft == "X") || (topLeft == "O")) {
    computer();
}
else if((randomPlay == 2) && (topMiddle == '') && (xTurn == 0)){
    document.getElementById("topMiddle").value = "O";
}else if((randomPlay == 2) && (topMiddle == "X") || (topMiddle == "O")){
    computer();
}
else if((randomPlay == 3) && (topRight == '') && (xTurn == 0)){
    document.getElementById("topRight").value = "O";
}else if((randomPlay == 3) && (topRight == "X") || (topRight == "O")){
    computer();
}
else if((randomPlay == 4) && (middleLeft == '') && (xTurn == 0)){
    document.getElementById("topLeft").value = "O";
}else if((randomPlay == 4) && (middleLeft == "X") || (middleLeft == "O")){
    computer();
}
else if((randomPlay == 5) && (middleMiddle == '') && (xTurn == 0)){
    document.getElementById("middleMiddle").value = "O";
}else if((randomPlay == 5) && (middleMiddle == "X") || (middleMiddle == "O")){
    computer();
}
else if((randomPlay == 6) && (middleRight == '') && (xTurn == 0)){
    document.getElementById("middleRight").value = "O";
}else if((randomPlay == 6) && (middleRight == "X") || (middleRight == "O")){
    computer();
}
else if((randomPlay == 7) && (bottomLeft == '') && (xTurn == 0)){
    document.getElementById("bottomLeft").value = "O";
}else if((randomPlay == 7) && (bottomLeft == "X") || (bottomLeft == "O")){
    computer();
}
else if((randomPlay == 8) && (bottomMiddle == '') && (xTurn == 0)){
    document.getElementById("bottomMiddle").value = "O";
}else if((randomPlay == 8) && (bottomMiddle == "X") || (bottomMiddle == "O")){
    computer();
}
else if((randomPlay == 9) && (bottomRight == '') && (xTurn == 0)){
    document.getElementById("bottomRight").value = "O";
}else if((randomPlay == 9) && (bottomRight == "X") || (bottomRight == "O")){
    computer();
}
}

