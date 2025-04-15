Minesweeper Game
Minesweeper is a classic single-player puzzle game where you uncover cells on a grid to reveal numbers or avoid hidden mines. Built with HTML, CSS, and JavaScript, this version offers a modern, responsive design playable on both desktop and mobile devices. The first click is always safe, ensuring a fair start, and multiple difficulty levels provide challenges for all skill levels.
Live Demo
Play the game now: [https://arybishal.github.io/minesweeper-game/home.html](https://arybishal.github.io/minesweeper-game/)
Note: Replace YourUsername above with your GitHub username after setting up the repository.
Features

Multiple Difficulties:
Beginner: 9x9 grid with 10 mines.
Intermediate: 16x16 grid with 40 mines.
Expert: 30x16 grid with 99 mines.


Responsive Design:
Desktop: 35px cells for clear visibility (~315px for 9x9, ~1050px for 30x16).
Mobile: 30-40px cells, scaling to ~90% of screen width for touch-friendly play.


Safe First Click: The first cell clicked and its neighbors are guaranteed mine-free.
Flagging System: Mark suspected mines to avoid mistakes.
User-Friendly Interface: Includes a home page, difficulty selector, and game status messages.
Navigation: Easy access between the home page and game page.

How to Play

Start the Game:

Visit the live demo.
Click Play Now to enter the game.


Gameplay:

Objective: Reveal all non-mine cells without hitting a mine.
Board: A grid of clickable cells, some hiding mines.
Controls:
Difficulty Dropdown: Choose Beginner, Intermediate, or Expert.
New Game Button: Start a new board with the selected difficulty.
Back to Home: Return to the landing page.


Interactions:
Left-Click: Reveal a cell. If it’s a mine, you lose; if safe, it shows a number (adjacent mines) or expands (if no adjacent mines).
Right-Click: Place/remove a flag (🚩) on a suspected mine to prevent clicking it.
First Click: Always safe, ensuring a playable start.


Status Messages:
“Game Over! You hit a mine!” when you lose, showing all mines (💣).
“Congratulations! You won!” when you reveal all safe cells.




Tips:

Use numbers to deduce mine locations (e.g., a “2” with two unrevealed neighbors means both are mines).
Flag cells you’re sure contain mines.
Start with Beginner to learn, then try Expert for a challenge!



Screenshots
(Add a screenshot here by uploading an image to the repository and linking it, e.g., ![Gameplay](screenshot.png))
Using the Game Locally
To run the game on your computer:

Download the Files:

Go to https://github.com/arybishal/minesweeper-game.
Click Code → Download ZIP.
Extract the ZIP to a folder (e.g., minesweeper-game).


Serve Locally:

Install Python (if not already installed) from python.org.

Open a terminal and navigate to the folder:
cd path/to/minesweeper-game


Run a local server:
python -m http.server 8000


Open http://localhost:8000/home.html in a browser.



Files:

home.html: Landing page with game introduction.
index.html: Main game interface.
styles.css: Styles for layout and responsive design.
script.js: Game logic, including mine placement and click handling.



Contributing
Want to improve the game? Contributions are welcome!

Report Issues: Create an issue at https://github.com/YourUsername/minesweeper-game/issues.
Submit Changes:
Fork the repository.
Make changes (e.g., add touch controls, new features).
Submit a pull request with a clear description.



License
This project is licensed under the MIT License, allowing free use, modification, and distribution.

Created by Bishal Aryal. Have fun playing Minesweeper!
