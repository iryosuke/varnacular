var scores, roundScorem, activeScore, dice;
scores = [0, 0];
roundScore = 0;
activeScore = 0;

dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';