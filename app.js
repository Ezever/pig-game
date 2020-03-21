var scores, roundScore, activePlayer, gamePlaying, lastDice, record = 0, recordPlayer;

let playersNames = [
    document.getElementById('name-0').value,
    document.getElementById('name-1').value
];

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = '/utils/dice-' + dice + '.png';

        //3. Update the round score
        if (dice === 6 && lastDice === 6) {
            scores[activePlayer] = 0
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        } else if (dice !== 1) {
            //Add score
            lastDice = dice;
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] > record) {
            record = scores[activePlayer];
            document.querySelector('.score').textContent = `Score: ` + record;
            recordPlayer = playersNames[activePlayer];
        }

        // Check if player won the game
        var input = parseInt(document.querySelector('.final-score').value, 10);
        var winningScore = 100;
        
        if(input) {
            winningScore = input;
        }

        if (scores[activePlayer] >= winningScore) {
            document.querySelector('.player').textContent = recordPlayer;
            document.querySelector('#win-' + activePlayer).textContent = 'Winner!';
            setTimeout(removeWinner, 2000);
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    lastDice = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    lastDice = 0;
    
    playersNames[0] = document.getElementById('name-0').value;
    playersNames[1] = document.getElementById('name-1').value;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').value = playersNames[0];
    document.getElementById('name-1').value = playersNames[1];

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function removeWinner() {
    document.querySelector('#win-' + activePlayer).textContent = '';
}
