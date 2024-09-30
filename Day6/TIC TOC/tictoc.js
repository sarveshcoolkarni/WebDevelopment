let gameBoard = [];
let currentPlayer = "X";
let gameOver = false;

// Initialize game board
for (let i = 0; i < 9; i++) {
	gameBoard.push("");
}

// Add event listeners to squares
document.querySelectorAll(".square").forEach((square, index) => {
	square.addEventListener("click", () => {
		if (!gameOver && gameBoard[index] === "") {
			gameBoard[index] = currentPlayer;
			updateSquare(square, currentPlayer);
			checkWin();
			switchPlayer();
		}
	});
});

// Update square with current player's mark
function updateSquare(square, player) {
	square.textContent = player;
}

// Check for wins
function checkWin() {
	const winConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (let i = 0; i < winConditions.length; i++) {
		const condition = winConditions[i];
		if (gameBoard[condition[0]] === gameBoard[condition[1]] && gameBoard[condition[1]] === gameBoard[condition[2]] && gameBoard[condition[0]] !== "") {
			gameOver = true;
			updateGameStatus(`Player ${gameBoard[condition[0]]} wins!`);
			return;
		}
	}

	if (!gameBoard.includes("")) {
		gameOver = true;
		updateGameStatus("It's a draw!");
	}
}

// Switch current player
function switchPlayer() {
	currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Update game status
function updateGameStatus(status) {
	document.getElementById("game-status").textContent = status;
}