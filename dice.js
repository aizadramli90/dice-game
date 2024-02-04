function rollTheDice() {
    let randomNumber_player1 = Math.floor(Math.random()*6) + 1;
    let randomNumber_player2 = Math.floor(Math.random()*6) + 1;

    console.log(randomNumber_player1);
    console.log(randomNumber_player2);

    document.getElementById("dice1").src = `./images/dice${randomNumber_player1}.png`;
    document.getElementById("dice2").src = `./images/dice${randomNumber_player2}.png`;

    let announce = document.querySelector("h1");

if (randomNumber_player1 > randomNumber_player2) {
    //winner = player1;
    announce.innerHTML = "Player 1 Wins!";
} else if (randomNumber_player1 < randomNumber_player2) {
    //winner = player2;
    announce.innerHTML = "Player 2 Wins!";
} else {
    announce.innerHTML = "It's a Draw!";

}
}










