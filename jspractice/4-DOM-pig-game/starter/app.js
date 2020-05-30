var scores, roundScore, activePlayer, gamePlaying;  
init();111

dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

function btn() {
    //do somthing here
}
btn();

var lastdice = dice;

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        //1.random number 
    dice = Math.floor(Math.random() * 6) + 1;


    //display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice  + '.png';

 
    //update the round　score if the rolled number was not a 1
    if (dice === 6 && lastdice === 6){
        scores[activePlayer] = 0;
        document.getElementById('score-' + activePlayer).textContent = '0';
        nextPlayer();
    }
    else if(dice !== 1) {
        //add score
        roundScore += dice; //roundScore = roundScore + dice//
        document.querySelector('#current-' + activePlayer).textContent = roundScore;      
    }else {
        nextPlayer();
    }
    }

    lastdice = dice;
    //if either of the party wins and push roll dice later it will go back to 0//　　
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        // Add Current score to gloabl score
    scores[activePlayer] += roundScore;
    // scores[activePlayer] = scores[activePlayer] + roundScore;

    //update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('.final-score').value;
    var winningScore;
    //undefined, 0, null, are coerced to false

    if(input){
        winningScore = input;
    }else {
        winningScore = 100;
    }

    //check if the player won the game
    if (scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;

    } else {
        nextPlayer();  
    }
    }
});


function nextPlayer() {
     //next player 
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0; 

     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');
     // if (activePlayer === 0) {
     //     document.querySelector('.player-0-panel').classList.remove('active');
     //     document.querySelector('.player-1-panel').classList.add('active');
     // }else {
     //     document.querySelector('.player-0-panel').classList.add('active');
     //     document.querySelector('.player-1-panel').classList.remove('active');
     // }

     document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer= 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent= '0';
    document.getElementById('current-0').textContent ='0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};
