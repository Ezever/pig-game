# pig-game

JavaScript application to play Pig Game on browser

The initial commit with templates, code and images are copied from <https://github.com/jonasschmedtmann/complete-javascript-course.> This application improves the game with new features.

## Basic rules

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- But, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

## New rules

- A player looses his ENTIRE score when he rolls two 6 in a row without hold between them. After that, it's the next player's turn.
