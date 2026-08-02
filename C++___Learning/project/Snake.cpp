#include <iostream>
#include <conio.h>
#include <windows.h>
#include <vector>
#include <ctime>
#include <string>
#include <deque>

using namespace std;

// Game Constants
const int WIDTH = 40;
const int HEIGHT = 20;

// Direction Enum
enum Direction
{
    STOP = 0,
    LEFT,
    RIGHT,
    UP,
    DOWN
};

// Console Functions
void gotoxy(int x, int y)
{
    COORD coord = {(SHORT)x, (SHORT)y};
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}

void hideCursor()
{
    CONSOLE_CURSOR_INFO info = {1, FALSE};
    SetConsoleCursorInfo(GetStdHandle(STD_OUTPUT_HANDLE), &info);
}

void setColor(int color)
{
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), color);
}

// Point Structure
struct Point
{
    int x, y;
    Point(int _x = 0, int _y = 0) : x(_x), y(_y) {}
    bool operator==(const Point &other) const
    {
        return x == other.x && y == other.y;
    }
};

// Food Class
class Food
{
public:
    Point pos;
    char symbol;
    int points;
    int color;

    Food()
    {
        spawn();
    }

    void spawn()
    {
        pos.x = rand() % (WIDTH - 2) + 1;
        pos.y = rand() % (HEIGHT - 2) + 1;

        // Random food types
        int type = rand() % 10;
        if (type < 6)
        {
            symbol = '@'; // Normal food
            points = 10;
            color = 12; // Red
        }
        else if (type < 9)
        {
            symbol = '$'; // Bonus food
            points = 25;
            color = 14; // Yellow
        }
        else
        {
            symbol = '*'; // Super food
            points = 50;
            color = 13; // Magenta
        }
    }

    void draw()
    {
        setColor(color);
        gotoxy(pos.x, pos.y);
        cout << symbol;
        setColor(7);
    }
};

// Snake Class
class Snake
{
public:
    deque<Point> body;
    Direction dir;
    Direction nextDir;
    bool alive;
    int growAmount;

    Snake()
    {
        reset();
    }

    void reset()
    {
        body.clear();
        int startX = WIDTH / 2;
        int startY = HEIGHT / 2;

        // Initial snake body (length 4)
        for (int i = 0; i < 4; i++)
        {
            body.push_back(Point(startX - i, startY));
        }

        dir = RIGHT;
        nextDir = RIGHT;
        alive = true;
        growAmount = 0;
    }

    void setDirection(Direction newDir)
    {
        // Prevent 180-degree turns
        if ((dir == LEFT && newDir == RIGHT) ||
            (dir == RIGHT && newDir == LEFT) ||
            (dir == UP && newDir == DOWN) ||
            (dir == DOWN && newDir == UP))
        {
            return;
        }
        nextDir = newDir;
    }

    void move()
    {
        dir = nextDir;

        Point newHead = body.front();

        switch (dir)
        {
        case UP:
            newHead.y--;
            break;
        case DOWN:
            newHead.y++;
            break;
        case LEFT:
            newHead.x--;
            break;
        case RIGHT:
            newHead.x++;
            break;
        default:
            break;
        }

        body.push_front(newHead);

        if (growAmount > 0)
        {
            growAmount--;
        }
        else
        {
            body.pop_back();
        }
    }

    void grow(int amount = 1)
    {
        growAmount += amount;
    }

    bool checkSelfCollision()
    {
        Point head = body.front();
        for (size_t i = 1; i < body.size(); i++)
        {
            if (head == body[i])
            {
                return true;
            }
        }
        return false;
    }

    bool checkWallCollision()
    {
        Point head = body.front();
        return (head.x <= 0 || head.x >= WIDTH - 1 ||
                head.y <= 0 || head.y >= HEIGHT - 1);
    }

    bool isOnSnake(Point p, bool includeHead = true)
    {
        size_t start = includeHead ? 0 : 1;
        for (size_t i = start; i < body.size(); i++)
        {
            if (p == body[i])
                return true;
        }
        return false;
    }

    Point getHead()
    {
        return body.front();
    }

    void draw()
    {
        for (size_t i = 0; i < body.size(); i++)
        {
            gotoxy(body[i].x, body[i].y);
            if (i == 0)
            {
                // Head
                setColor(10); // Bright Green
                switch (dir)
                {
                case UP:
                    cout << "^";
                    break;
                case DOWN:
                    cout << "v";
                    break;
                case LEFT:
                    cout << "<";
                    break;
                case RIGHT:
                    cout << ">";
                    break;
                default:
                    cout << "O";
                    break;
                }
            }
            else
            {
                // Body
                setColor(2); // Dark Green
                cout << "o";
            }
        }
        setColor(7);
    }
};

// Game Class
class SnakeGame
{
private:
    Snake snake;
    Food food;
    int score;
    int highScore;
    int level;
    int speed;
    bool gameOver;
    bool paused;
    bool wallMode; // true = walls kill, false = wrap around

public:
    SnakeGame()
    {
        highScore = 0;
        wallMode = true;
        reset();
    }

    void reset()
    {
        snake.reset();
        score = 0;
        level = 1;
        speed = 150;
        gameOver = false;
        paused = false;
        spawnFood();
    }

    void spawnFood()
    {
        do
        {
            food.spawn();
        } while (snake.isOnSnake(food.pos));
    }

    void drawBorder()
    {
        setColor(8); // Gray

        // Top border
        gotoxy(0, 0);
        cout << "+";
        for (int i = 1; i < WIDTH - 1; i++)
            cout << "-";
        cout << "+";

        // Side borders
        for (int i = 1; i < HEIGHT - 1; i++)
        {
            gotoxy(0, i);
            cout << "|";
            gotoxy(WIDTH - 1, i);
            cout << "|";
        }

        // Bottom border
        gotoxy(0, HEIGHT - 1);
        cout << "+";
        for (int i = 1; i < WIDTH - 1; i++)
            cout << "-";
        cout << "+";

        setColor(7);
    }

    void drawScore()
    {
        setColor(15);
        gotoxy(WIDTH + 3, 2);
        cout << "=== SNAKE GAME ===";

        setColor(11);
        gotoxy(WIDTH + 3, 4);
        cout << "Score: " << score << "    ";

        setColor(14);
        gotoxy(WIDTH + 3, 5);
        cout << "High:  " << highScore << "    ";

        setColor(10);
        gotoxy(WIDTH + 3, 6);
        cout << "Level: " << level << "    ";

        setColor(13);
        gotoxy(WIDTH + 3, 7);
        cout << "Length: " << snake.body.size() << "    ";

        setColor(8);
        gotoxy(WIDTH + 3, 9);
        cout << "Mode: " << (wallMode ? "Classic" : "No Walls");

        setColor(7);
    }

    void drawControls()
    {
        setColor(8);
        gotoxy(WIDTH + 3, 11);
        cout << "--- CONTROLS ---";
        gotoxy(WIDTH + 3, 12);
        cout << "Arrow Keys: Move";
        gotoxy(WIDTH + 3, 13);
        cout << "WASD: Move";
        gotoxy(WIDTH + 3, 14);
        cout << "P: Pause";
        gotoxy(WIDTH + 3, 15);
        cout << "M: Toggle Mode";
        gotoxy(WIDTH + 3, 16);
        cout << "R: Restart";
        gotoxy(WIDTH + 3, 17);
        cout << "Q: Quit";
        setColor(7);
    }

    void drawFoodLegend()
    {
        setColor(8);
        gotoxy(WIDTH + 3, HEIGHT - 4);
        cout << "--- FOOD ---";
        setColor(12);
        gotoxy(WIDTH + 3, HEIGHT - 3);
        cout << "@ = 10 pts";
        setColor(14);
        gotoxy(WIDTH + 3, HEIGHT - 2);
        cout << "$ = 25 pts";
        setColor(13);
        gotoxy(WIDTH + 3, HEIGHT - 1);
        cout << "* = 50 pts";
        setColor(7);
    }

    void clearPlayArea()
    {
        for (int y = 1; y < HEIGHT - 1; y++)
        {
            gotoxy(1, y);
            cout << string(WIDTH - 2, ' ');
        }
    }

    void draw()
    {
        clearPlayArea();
        drawBorder();
        drawScore();
        drawControls();
        drawFoodLegend();
        food.draw();
        snake.draw();
    }

    void input()
    {
        if (_kbhit())
        {
            char ch = _getch();

            // Handle arrow keys (they send two characters)
            if (ch == -32 || ch == 0)
            {
                ch = _getch();
                switch (ch)
                {
                case 72:
                    snake.setDirection(UP);
                    break; // Up arrow
                case 80:
                    snake.setDirection(DOWN);
                    break; // Down arrow
                case 75:
                    snake.setDirection(LEFT);
                    break; // Left arrow
                case 77:
                    snake.setDirection(RIGHT);
                    break; // Right arrow
                }
            }
            else
            {
                ch = tolower(ch);
                switch (ch)
                {
                case 'w':
                    snake.setDirection(UP);
                    break;
                case 's':
                    snake.setDirection(DOWN);
                    break;
                case 'a':
                    snake.setDirection(LEFT);
                    break;
                case 'd':
                    snake.setDirection(RIGHT);
                    break;
                case 'p':
                    paused = !paused;
                    break;
                case 'm':
                    wallMode = !wallMode;
                    break;
                case 'r':
                    reset();
                    break;
                case 'q':
                    exit(0);
                    break;
                case ' ':
                    if (gameOver)
                        reset();
                    break;
                }
            }
        }
    }

    void wrapSnake()
    {
        Point &head = snake.body.front();

        if (head.x <= 0)
            head.x = WIDTH - 2;
        else if (head.x >= WIDTH - 1)
            head.x = 1;

        if (head.y <= 0)
            head.y = HEIGHT - 2;
        else if (head.y >= HEIGHT - 1)
            head.y = 1;
    }

    void update()
    {
        if (paused || gameOver)
            return;

        snake.move();

        // Wall handling
        if (wallMode)
        {
            if (snake.checkWallCollision())
            {
                gameOver = true;
                snake.alive = false;
            }
        }
        else
        {
            wrapSnake();
        }

        // Self collision
        if (snake.checkSelfCollision())
        {
            gameOver = true;
            snake.alive = false;
        }

        // Food collision
        if (snake.getHead() == food.pos)
        {
            score += food.points;

            // Grow based on food type
            if (food.points == 10)
                snake.grow(1);
            else if (food.points == 25)
                snake.grow(2);
            else
                snake.grow(3);

            spawnFood();

            // Level up every 100 points
            int newLevel = score / 100 + 1;
            if (newLevel > level && newLevel <= 10)
            {
                level = newLevel;
                speed = max(50, 150 - (level - 1) * 15);
            }
        }

        // Update high score
        if (score > highScore)
        {
            highScore = score;
        }
    }

    void showGameOver()
    {
        setColor(12);

        int boxX = WIDTH / 2 - 12;
        int boxY = HEIGHT / 2 - 3;

        gotoxy(boxX, boxY);
        cout << "+------------------------+";
        gotoxy(boxX, boxY + 1);
        cout << "|       GAME OVER!       |";
        gotoxy(boxX, boxY + 2);
        cout << "|                        |";
        gotoxy(boxX, boxY + 3);
        cout << "|   Final Score: " << score;
        // Padding
        int padding = 7 - to_string(score).length();
        for (int i = 0; i < padding; i++)
            cout << " ";
        cout << "|";
        gotoxy(boxX, boxY + 4);
        cout << "|                        |";
        gotoxy(boxX, boxY + 5);
        cout << "|  Press SPACE to retry  |";
        gotoxy(boxX, boxY + 6);
        cout << "+------------------------+";

        setColor(7);
    }

    void showPaused()
    {
        setColor(14);

        int boxX = WIDTH / 2 - 8;
        int boxY = HEIGHT / 2 - 1;

        gotoxy(boxX, boxY);
        cout << "+----------------+";
        gotoxy(boxX, boxY + 1);
        cout << "|     PAUSED     |";
        gotoxy(boxX, boxY + 2);
        cout << "+----------------+";

        setColor(7);
    }

    void showStartScreen()
    {
        system("cls");

        setColor(10);
        cout << R"(
    ____              __           ______                   
   / __/___  ___ ___ / /_____     / ___/__ ___ _  ___       
  _\ \/ _ \/ _ `/  '_/ __/ -_)   / (_ / _ `/  ' \/ -_)      
 /___/_//_/\_,_/_/\_\\__/\__/    \___/\_,_/_/_/_/\__/       
                                                             
        )" << endl;

        setColor(11);
        cout << "\n\t\t=== CLASSIC SNAKE GAME ===" << endl;
        cout << "\n\t\t   Made with C++ Console" << endl;

        setColor(14);
        cout << "\n\n\t\t      CONTROLS:" << endl;
        setColor(7);
        cout << "\t\t   Arrow Keys / WASD - Move" << endl;
        cout << "\t\t   P - Pause Game" << endl;
        cout << "\t\t   M - Toggle Wall Mode" << endl;
        cout << "\t\t   R - Restart" << endl;
        cout << "\t\t   Q - Quit" << endl;

        setColor(12);
        cout << "\n\n\t\t   Eat food to grow!" << endl;
        cout << "\t\t   Don't hit yourself!" << endl;

        setColor(15);
        cout << "\n\n\t\t Press any key to start..." << endl;

        setColor(7);
        _getch();
        system("cls");
    }

    void run()
    {
        hideCursor();
        showStartScreen();

        while (true)
        {
            input();
            update();
            draw();

            if (gameOver)
            {
                showGameOver();
            }
            else if (paused)
            {
                showPaused();
            }

            Sleep(speed);
        }
    }
};

// Main Function
int main()
{
    srand((unsigned)time(0));

    // Set console size and title
    system("mode con: cols=65 lines=25");
    system("title Snake Game - C++ Console");

    SnakeGame game;
    game.run();

    return 0;
}