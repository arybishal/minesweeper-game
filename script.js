let board = [];
let rows, cols, mines;
let gameOver = false;
let revealedCells = 0;
let firstClick = true;

function initializeGame(difficulty) {
    console.log(`Initializing game: ${difficulty}`);
    if (difficulty === 'beginner') {
        rows = 9;
        cols = 9;
        mines = 10;
    } else if (difficulty === 'intermediate') {
        rows = 16;
        cols = 16;
        mines = 40;
    } else {
        rows = 16;
        cols = 30;
        mines = 99;
    }

    board = [];
    gameOver = false;
    revealedCells = 0;
    firstClick = true;
    document.getElementById('status').textContent = '';

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < cols; j++) {
            board[i][j] = {
                isMine: false,
                isRevealed: false,
                isFlagged: false,
                neighborMines: 0
            };
        }
    }

    renderBoard();
}

function placeMines(excludeR, excludeC) {
    console.log(`Placing ${mines} mines, excluding cell [${excludeR}, ${excludeC}]`);
    let minesPlaced = 0;
    let attempts = 0;
    const maxAttempts = rows * cols * 5;

    while (minesPlaced < mines && attempts < maxAttempts) {
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * cols);
        if (!board[r][c].isMine && 
            !(Math.abs(r - excludeR) <= 1 && Math.abs(c - excludeC) <= 1)) {
            board[r][c].isMine = true;
            minesPlaced++;
        }
        attempts++;
    }

    if (minesPlaced < mines) {
        console.warn(`Only placed ${minesPlaced}/${mines} mines`);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!board[i][j].isMine) {
                let count = 0;
                for (let di = -1; di <= 1; di++) {
                    for (let dj = -1; dj <= 1; dj++) {
                        let ni = i + di;
                        let nj = j + dj;
                        if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && board[ni][nj].isMine) {
                            count++;
                        }
                    }
                }
                board[i][j].neighborMines = count;
            }
        }
    }
}

function renderBoard() {
    console.log('Rendering board');
    let boardDiv = document.getElementById('board');
    if (!boardDiv) {
        console.error('Board element not found');
        return;
    }
    boardDiv.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.className = 'row';
        for (let j = 0; j < cols; j++) {
            let cellDiv = document.createElement('div');
            cellDiv.className = 'cell';
            cellDiv.dataset.row = i;
            cellDiv.dataset.col = j;
            cellDiv.addEventListener('click', handleClick);
            cellDiv.addEventListener('contextmenu', handleRightClick);
            if (board[i][j].isRevealed) {
                cellDiv.classList.add('revealed');
                if (board[i][j].isMine) {
                    cellDiv.classList.add('mine');
                    cellDiv.textContent = '💣';
                } else if (board[i][j].neighborMines > 0) {
                    cellDiv.textContent = board[i][j].neighborMines;
                }
            } else if (board[i][j].isFlagged) {
                cellDiv.classList.add('flagged');
                cellDiv.textContent = '🚩';
            }
            rowDiv.appendChild(cellDiv);
        }
        boardDiv.appendChild(rowDiv);
    }
}

function handleClick(event) {
    if (gameOver) return;
    let r = parseInt(event.target.dataset.row);
    let c = parseInt(event.target.dataset.col);
    console.log(`Clicked [${r}, ${c}]`);
    if (board[r][c].isFlagged || board[r][c].isRevealed) return;
    if (firstClick) {
        placeMines(r, c);
        firstClick = false;
    }
    revealCell(r, c);
    renderBoard();
    checkWin();
}

function handleRightClick(event) {
    event.preventDefault();
    if (gameOver) return;
    let r = parseInt(event.target.dataset.row);
    let c = parseInt(event.target.dataset.col);
    if (!board[r][c].isRevealed) {
        board[r][c].isFlagged = !board[r][c].isFlagged;
        console.log(`Flagged [${r}, ${c}]: ${board[r][c].isFlagged}`);
        renderBoard();
    }
}

function revealCell(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c].isRevealed || board[r][c].isFlagged) return;
    board[r][c].isRevealed = true;
    revealedCells++;
    if (board[r][c].isMine) {
        gameOver = true;
        document.getElementById('status').textContent = 'Game Over! You hit a mine!';
        revealAllMines();
        renderBoard();
        return;
    }
    if (board[r][c].neighborMines === 0) {
        for (let di = -1; di <= 1; di++) {
            for (let dj = -1; dj <= 1; dj++) {
                revealCell(r + di, c + dj);
            }
        }
    }
}

function revealAllMines() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j].isMine) {
                board[i][j].isRevealed = true;
            }
        }
    }
}

function checkWin() {
    if (revealedCells === rows * cols - mines) {
        gameOver = true;
        document.getElementById('status').textContent = 'Congratulations! You won!';
        console.log('Win condition met');
    }
}

function newGame() {
    let difficulty = document.getElementById('difficulty').value;
    initializeGame(difficulty);
}

initializeGame('beginner');