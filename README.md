# Rock Paper Scissors

A simple browser-based Rock Paper Scissors game built with plain HTML, CSS, and JavaScript.

## Project structure

- `index.html` — page structure and game UI
- `game.css` — styling, layout, colors, and responsive behavior
- `script.js` — game logic, random computer choice, winner calculation, and button interactions
- `images/` — image assets for the project (if used in future expansions)

## How the project works

### 1. Page setup
The game page is defined in `index.html`. It contains:
- the title
- a status area (`#comment`) where messages such as "DRAW" or "WINNER: HUMAN ✊" appear
- three clickable move buttons: rock, paper, and scissors
- a restart button that appears after a round finishes

### 2. Game styling
`game.css` handles the visual design of the game:
- black background and neon-style title
- centered game container
- emoji-based move buttons with circular buttons
- result box styling
- responsive mobile layout adjustments

### 3. Game logic in JavaScript
`script.js` contains the game flow:

- `moves` is an array of valid choices: `rock`, `paper`, `scissors`
- `moveEmojis` maps each move to its emoji symbol
- `getComputerMove()` picks a random move for the computer
- `computeWinner(humanMove, compMove)` compares the two moves using the standard rules:
  - rock beats scissors
  - paper beats rock
  - scissors beats paper
- when the user clicks a choice, the script:
  1. captures the player's choice
  2. randomly generates the computer's move
  3. compares both moves
  4. updates the result message in the `#comment` element
  5. hides the move buttons
  6. shows the restart icon

### 4. Restart behavior
The restart button resets the game by:
- showing the move choices again
- clearing the result text
- hiding the restart control until the next round is played

## How to run it

Open `index.html` in a browser to play the game.

You can also use a local web server if you prefer, for example:

```bash
python3 -m http.server
```

Then open `http://localhost:8000` in your browser.

## Summary

This project is a lightweight front-end game that demonstrates how JavaScript can handle DOM events, randomization, and game logic in a small interactive app without any frameworks or libraries.
