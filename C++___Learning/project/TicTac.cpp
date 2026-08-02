#include <iostream>
#include <limits>

static const int N = 3;

void resetBoard(char board[N][N]) {
    for (int r = 0; r < N; ++r)
        for (int c = 0; c < N; ++c)
            board[r][c] = ' ';
}

void printBoard(const char board[N][N]) {
    system("cls");
    std::cout << "\n    1   2   3\n";
    std::cout << "  +---+---+---+\n";
    for (int r = 0; r < N; ++r) {
        std::cout << (r + 1) << " | ";
        for (int c = 0; c < N; ++c) {
            std::cout << board[r][c] << " | ";
        }
        std::cout << "\n  +---+---+---+\n";
    }
    std::cout << std::endl;
}

bool hasWon(const char board[N][N], char p) {
    // Rows and columns
    for (int i = 0; i < N; ++i) {
        if (board[i][0] == p && board[i][1] == p && board[i][2] == p) return true; // row i
        if (board[0][i] == p && board[1][i] == p && board[2][i] == p) return true; // col i
    }
    // Diagonals
    if (board[0][0] == p && board[1][1] == p && board[2][2] == p) return true;
    if (board[0][2] == p && board[1][1] == p && board[2][0] == p) return true;

    return false;
}

bool isDraw(const char board[N][N]) {
    for (int r = 0; r < N; ++r)
        for (int c = 0; c < N; ++c)
            if (board[r][c] == ' ')
                return false;
    return true; // board full and no winner
}

bool isValidMove(const char board[N][N], int r, int c) {
    return r >= 0 && r < N && c >= 0 && c < N && board[r][c] == ' ';
}

int main() {
    char board[N][N];
    resetBoard(board);

    char player = 'X';

    while (true) {
        printBoard(board);

        // Get a valid move
        int r = -1, c = -1;
        while (true) {
            std::cout << "Player " << player << ", enter row and column (1-3 1-3): ";
            if (!(std::cin >> r >> c)) {
                if (std::cin.eof()) {
                    std::cout << "\nInput ended. Goodbye!\n";
                    return 0;
                }
                std::cin.clear();
                std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
                std::cout << "Invalid input. Please enter two numbers between 1 and 3.\n";
                continue;
            }
            r--; c--; // convert to 0-based
            if (!isValidMove(board, r, c)) {
                std::cout << "Invalid move. Pick an empty cell within 1-3 for both row and column.\n";
                continue;
            }
            break;
        }

        // Place the move
        board[r][c] = player;

        // Check for win/draw
        if (hasWon(board, player)) {
            printBoard(board);
            std::cout << "Player " << player << " wins! 🎉\n";
            break;
        }
        if (isDraw(board)) {
            printBoard(board);
            std::cout << "It's a draw! 🤝\n";
            break;
        }

        // Switch player
        player = (player == 'X') ? 'O' : 'X';
    }

    return 0;
}