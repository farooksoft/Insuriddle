// index.html script
document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const empid = document.getElementById('empid').value;
    localStorage.setItem('username', username);
    localStorage.setItem('empid', empid);
    window.location.href = 'game.html';
});

// game.html script
const usernameDisplay = document.getElementById('username-display');
const empidDisplay = document.getElementById('empid-display');
const gameBoard = document.getElementById('game-board');
const scoreCard = document.getElementById('score-card');

const username = localStorage.getItem('username');
const empid = localStorage.getItem('empid');

usernameDisplay.textContent = username;
empidDisplay.textContent = empid;

// Mine game logic (simplified for demonstration)
const gridSize = 10;
const mineCount = 10;

function createGameBoard() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.