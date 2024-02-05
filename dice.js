let score_update1 = 0;
let score_update2 = 0;
let round_update = 0;

function rollTheDice() {
    let randomNumber_player1 = Math.floor(Math.random()*6) + 1;
    let randomNumber_player2 = Math.floor(Math.random()*6) + 1;

    //console.log(randomNumber_player1);
    //console.log(randomNumber_player2);

    let round_selector = document.getElementById("round");
    round_update = round_update + 1;
    round_selector.innerHTML = round_update;

    document.getElementById("dice1").src = `./images/dice${randomNumber_player1}.png`;
    document.getElementById("dice2").src = `./images/dice${randomNumber_player2}.png`;

    let announce = document.querySelector("h1");
    let changeColor1 = document.getElementById("p1"); 
    let changeColor2 = document.getElementById("p2");

   

    let score1 = document.getElementById("current-score1");
    let score2 = document.getElementById("current-score2");

if (randomNumber_player1 > randomNumber_player2) {
    //winner = player1;
    announce.innerHTML = "Player 1 Wins!"; // announce winner
    changeColor1.style.color = 'greenyellow';
    setTimeout(function() {
        changeColor1.style.color = "#E9F6FF";
    }, 250);
    score_update1 = score_update1 + 1;
    score1.innerHTML = score_update1;

} else if (randomNumber_player1 < randomNumber_player2) {
    //winner = player2;
    announce.innerHTML = "Player 2 Wins!";
    changeColor2.style.color = 'greenyellow';
    setTimeout(function() {
        changeColor2.style.color = "#E9F6FF";
    }, 250);
    score_update2 += 1;
    score2.innerHTML = score_update2;

} else {
    announce.innerHTML = "It's a Draw!";

}
}










