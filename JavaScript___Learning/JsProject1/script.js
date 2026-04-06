// ----------------- Board
const board = document.querySelector(".board");
const blockWidth = 50;
const blockHeight = 50;
board.style.gridTemplateColumns = `repeat(auto-fill, minmax(${blockHeight}px, 1fr))`;
board.style.gridTemplateRows = `repeat(auto-fill, minmax(${blockWidth}px, 1fr))`;
const startModal = document.querySelector(".start-modal");
const btnStart = document.querySelector(".btn-start");
const btnRestart = document.querySelector(".btn-restart");
const restartModal = document.querySelector(".over-modal");
let highScore = document.querySelector("#high-score");
let Score = document.querySelector("#score");
let Time = document.querySelector("#time");
Score = 0;
// ----------------- Blocks
const blocks = [];
const rows = Math.floor(board.clientHeight / blockHeight);
const cols = Math.floor(board.clientWidth / blockWidth);

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement("div");
        block.classList.add("block");
        board.appendChild(block);
        blocks[`${row},${col}`] = block;
        block.innerText = `${row},${col}`;
    }
}
// ----------------- Snake
let snake = [
    { x: 1, y: 3 },
]
let food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
}

let direction = "down";

let inervalID = null;
Score.innerText = Score;
function render() {
    let head = null;
    blocks[`${food.x},${food.y}`].classList.add("food");

    if (direction == "right") {
        head = { x: snake[0].x, y: snake[0].y + 1 };
    } else if (direction == "left") {
        head = { x: snake[0].x, y: snake[0].y - 1 };
    }
    else if (direction == "up") {
        head = { x: snake[0].x - 1, y: snake[0].y };
    }
    else if (direction == "down") {
        head = { x: snake[0].x + 1, y: snake[0].y };
    } else {
        direction = "down";
    }
    if (head.x == food.x && head.y == food.y) {
        snake.unshift(head);
        Score += 10;
        Score.innerText = Score;
        blocks[`${food.x},${food.y}`].classList.remove("food");
        food = {
            x: Math.floor(Math.random() * rows),
            y: Math.floor(Math.random() * cols),
        }
        blocks[`${food.x},${food.y}`].classList.add("food");
    }
    if (head.x < 0 || head.y < 0 || head.x >= rows || head.y >= cols) {
        restartModal.style.display = "flex";
        direction = "right"
        Score.innerText = "0";
        clearInterval(inervalID);
        return;
    }
    snake.forEach(segment => {
        blocks[`${segment.x},${segment.y}`].classList.remove("fill");
    })
    snake.unshift(head);
    snake.pop();
    snake.forEach(segment => {
        blocks[`${segment.x},${segment.y}`].classList.add("fill");
    })
}

function restartGame() {
    restartModal.style.display = "none";

    snake.forEach(segment => {
        blocks[`${segment.x},${segment.y}`].classList.remove("fill");
    })
    snake = [
        { x: 4, y: 5 },
    ]
    inervalID = setInterval(() => {
        render()
    }, 200);
}
btnRestart.addEventListener("click", restartGame)
function startGame() {
    startModal.style.display = "flex";
    btnStart.addEventListener("click", () => {
        startModal.style.display = "none";
        console.log("clicked");

        inervalID = setInterval(() => {
            render()
        }, 200);
    })
}
window.addEventListener("load", () => {
    startGame();
});

window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp") {
        direction = "up"
    } else if (e.key == "ArrowDown") {
        direction = "down"
    }
    else if (e.key == "ArrowRight") {
        direction = "right"
    }
    else if (e.key == "ArrowLeft") {
        direction = "left"
    } else if (restartModal.style.display === "flex") {
        console.log(e.key);
        if (e.key === "Enter" || e.key === " ") {
            restartGame();
        }
    }
    else if (startModal.style.display === "flex") {
        console.log(e.key);
        if (e.key === "Enter" || e.key === " ") {
            startModal.style.display = "none";
            console.log("clicked");
            inervalID = setInterval(() => {
                render()
            }, 200);
        }
    }
}) 