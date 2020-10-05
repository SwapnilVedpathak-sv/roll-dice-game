function PlayLudo() {
    var check1 = Math.floor(Math.random() * 6) + 1;
    var playDice1 = "./Images/dice" + check1 + ".png";
    document.getElementById("play1").setAttribute('src', playDice1);

    var check2 = Math.floor(Math.random() * 6) + 1;
    var playDice2 = "./Images/dice" + check2 + ".png";
    document.getElementById("play2").setAttribute('src', playDice2);
    if (check1 > check2) {
        document.querySelector('h1').innerHTML = "Player 1 Won :)";
    }
    else if (check1 < check2) {
        document.querySelector('h1').innerHTML = "Player 2 Won :)";
    }
    else {
        document.querySelector('h1').innerHTML = "Draw !";
    }
}