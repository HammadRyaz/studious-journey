#include <iostream>
#include <cstdlib>
#include <ctime>
#include "Colors.cpp"
using namespace std;
#define RESET "\033[0m"
#define RED "\033[31m"
#define GREEN "\033[32m"
#define YELLOW "\033[33m"
#define BLUE "\033[34m"
#define MAGENTA "\033[35m"
#define CYAN "\033[36m"
#define WHITE "\033[37m"
#define BLACK "\033[30m"

#define BG_BLACK "\033[40m"
#define BG_RED "\033[41m"
#define BG_GREEN "\033[42m"
#define BG_YELLOW "\033[43m"
#define BG_BLUE "\033[44m"
#define BG_MAGENTA "\033[45m"
#define BG_CYAN "\033[46m"
#define BG_WHITE "\033[47m"
// Function prototypes
void initializeBoard(char board[][3]);
void displayBoard(char board[][3]);
bool makeMove(char board[][3], int row, int col, char player);
bool checkWin(char board[][3], char player);
bool checkDraw(char board[][3]);
int minimax(char board[][3], int depth, bool isMaximizing);
void makeAIMove(char board[][3]);
void clearScreen();

int main()
{
    char board[3][3];
    char currentPlayer;
    int row, col;
    int gameMode;
    bool gameOver;
    char playAgain;
    srand(time(0)); // For random AI moves in easy mode

    do
    {
        initializeBoard(board);
        gameOver = false;
        currentPlayer = 'X';

        clearScreen();
        cout << YELLOW << "\t\t\t\t\t"<<
        "╔══════════════════════════════════╗" << endl;
        cout << "\t\t\t\t\t"<<
        "║        TIC-TAC-TOE GAME          ║" << endl;
        cout << "\t\t\t\t\t"<<
        "╚══════════════════════════════════╝" << RESET << endl;
        cout << "\n\t\t\t\t\tSelect Game Mode:" << endl;
        cout << "\t\t\t\t\t1." << GREEN << " Two Players" << RESET << endl;
        cout << "\t\t\t\t\t2. " << GREEN << " Player " << RESET << " vs" << BLUE " Computer" << RESET << endl;
        cout << "\n\t\t\t\t\tEnter choice (1 or 2): ";
        cin >> gameMode;

        clearScreen();

        while (!gameOver)
        {
            displayBoard(board);

            if (currentPlayer == 'X' || gameMode == 1)
            {
                // Human player's turn
                cout << "\nPlayer " << currentPlayer << "'s turn" << endl;

                do
                {
                    cout << "Enter row (1-3): ";
                    cin >> row;
                    cout << "Enter column (1-3): ";
                    cin >> col;
                    row--;
                    col--;
                } while (!makeMove(board, row, col, currentPlayer));
            }
            else
            {
                // Computer's turn
                cout << "\nComputer (O) is thinking..." << endl;
                makeAIMove(board);
            }

            clearScreen();

            if (checkWin(board, currentPlayer))
            {
                displayBoard(board);
                if (currentPlayer == 'O' && gameMode == 2)
                {
                    cout << BLUE << "\n╔════════════════════════════════╗" << endl;
                    cout << "║      COMPUTER WINS!            ║" << endl;
                    cout << "╚════════════════════════════════╝" << RESET << endl;
                }
                else
                {
                    cout << GREEN << "\n╔════════════════════════════════╗" << endl;
                    cout << "║     PLAYER " << currentPlayer << " WINS!             ║" << endl;
                    cout << "╚════════════════════════════════╝" << RESET << endl;
                }
                gameOver = true;
            }
            else if (checkDraw(board))
            {
                displayBoard(board);
                cout << RED << "\n╔════════════════════════════════╗" << endl;
                cout << "║         IT'S A DRAW!           ║" << endl;
                cout << "╚════════════════════════════════╝" << RESET << endl;
                gameOver = true;
            }
            else
            {
                currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
            }
        }

        cout << "\nPlay again? (y/n): ";

        cin >> playAgain;

    } while (playAgain == 'y' || playAgain == 'Y');

    cout << "Thanks for playing!" << endl;
    return 0;
}

// Simple AI move (random valid position)
void makeAIMove(char board[][3])
{
    int row, col;
    do
    {
        row = rand() % 3;
        col = rand() % 3;
    } while (!makeMove(board, row, col, 'O'));
}

// Initialize board
void initializeBoard(char board[][3])
{
    char num = '1';
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            board[i][j] = num++;
        }
    }
}

// Display board
void displayBoard(char board[][3])
{
    cout << "\n     1   2   3" << endl;
    cout << YELLOW << "   ┌───┬───┬───┐" << RESET << endl;
    for (int i = 0; i < 3; i++)
    {
        cout << " " << i + 1 << " │";
        for (int j = 0; j < 3; j++)
        {
            if (board[i][j] == 'X' || board[i][j] == 'O')
            {
                if (board[i][j] == 'X')
                {
                    cout << BG_RED << " " << board[i][j] << " " << RESET;
                }
                else
                {
                    cout << BG_CYAN << " " << board[i][j] << " " << RESET;
                }
            }
            else
            {
                cout << "   ";
            }
            if (j < 2)
                cout << YELLOW << "│" << RESET;
        }
        cout << YELLOW << "│" << RESET << endl;
        if (i < 2)
        {
            cout << YELLOW << "   ├───┼───┼───┤" << RESET << endl;
        }
    }
    cout << YELLOW << "   └───┴───┴───┘" << RESET << endl;
}

// Make move
bool makeMove(char board[][3], int row, int col, char player)
{
    if (row >= 0 && row < 3 && col >= 0 && col < 3 &&
        board[row][col] != 'X' && board[row][col] != 'O')
    {
        board[row][col] = player;
        return true;
    }
    return false;
}

// Check win
bool checkWin(char board[][3], char player)
{
    // Check rows and columns
    for (int i = 0; i < 3; i++)
    {
        if ((board[i][0] == player && board[i][1] == player && board[i][2] == player) ||
            (board[0][i] == player && board[1][i] == player && board[2][i] == player))
        {
            return true;
        }
    }

    // Check diagonals
    if ((board[0][0] == player && board[1][1] == player && board[2][2] == player) ||
        (board[0][2] == player && board[1][1] == player && board[2][0] == player))
    {
        return true;
    }

    return false;
}

// Check draw
bool checkDraw(char board[][3])
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (board[i][j] != 'X' && board[i][j] != 'O')
            {
                return false;
            }
        }
    }
    return true;
}

// Clear screen
void clearScreen()
{
#ifdef _WIN32
    system("cls");
#else
    system("clear");
#endif
}