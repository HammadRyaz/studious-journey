const board = document.querySelector(".board");
let blocks = {};
let snake = {}
function createGrid() {
    const rows = Math.floor(board.clientHeight / 40);
    const cols = Math.floor(board.clientWidth / 40);

    board.innerHTML = "";
    blocks = {};

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const block = document.createElement("div");
            block.classList.add("block");

            blocks[`${row},${col}`] = block;
            board.appendChild(block);
        }
    }

    console.log("Grid rebuilt:", rows, cols);
}
createGrid();

window.addEventListener("resize", () => {
    createGrid();
});


