var scores, roundScore, activePlayer;  

scores = [0, 0];
roundScore = 0;
activePlayer= 0;

dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent= '0';
document.getElementById('current-0').textContent ='0';
document.getElementById('current-1').textContent = '0';

function btn() {
    //do somthing here
}
btn();

document.querySelector('.btn-roll').addEventListener('click', function() {
    //1.random number 
    dice = Math.floor(Math.random() * 6) + 1;


    //display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice  + '.png';


    //update the round the score if the rolled number was not a 1

    if (dice !== 1) {
        //add score
        roundScore += dice; 
        document.querySelector('#current-' + activePlayer).textContent = roundScore;      
    }else {
        //next player 
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0; 

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
    }

});