function startGame() {
    document.winner = null;
    document.turn = "X";
    document.click = 0;
    setMessage(document.turn + " gets to start first")
}

function move(square) {
    if (document.winner !== null) {
        alert("We have a winner already. Please restart")
    } else if (square.innerText === "") {
        document.click++;
        console.log(document.click);
        console.log(document.turn)
        square.innerText = document.turn;
        switchTurn()
    }
    else {
        alert("Invalid Move")
    }


}


function switchTurn() {
    if (checkWinner(document.turn)) {
        setMessage(document.turn + " Wins");
        document.winner = document.turn

    } else if (document.turn === "X") {
        if (document.click === 9) {
            setTimeout(function () {
                alert("Draw")
            }, 100)
        }
        document.turn = "0";
        setMessage("It's " + document.turn + " turn.")

    } else {
        document.turn = "X";
        setMessage("It's " + document.turn + " turn.")

    }

}

function checkWinner(move) {
    let result = false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move)) {
        result = true
    }
    return result

}

function checkRow(a, b, c, move) {
    let result = false;
    if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
        result = true
    }
    return result
}

function getBox(number) {
    return document.getElementById("s" + number).innerText
}

function setMessage(msg) {
    document.getElementById("message").innerText = msg

}

function clearBox() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById("s" + i).innerText = ""
    }
    startGame()
}
