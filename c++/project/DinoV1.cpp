#include <iostream>
#include <conio.h>
#include <windows.h>
#include <vector>
#include <ctime>
#include <string>

using namespace std;

// Game Constants
const int WIDTH = 70;
const int HEIGHT = 20;
const int GROUND_Y = 15;

// Console Functions
void gotoxy(int x, int y) {
    COORD coord = {(SHORT)x, (SHORT)y};
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}

void hideCursor() {
    CONSOLE_CURSOR_INFO info = {1, FALSE};
    SetConsoleCursorInfo(GetStdHandle(STD_OUTPUT_HANDLE), &info);
}

void setColor(int color) {
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), color);
}

// Dinosaur Class
class Dinosaur {
public:
    int x, y;
    int velocity;
    bool isJumping;
    bool isDucking;
    
    // Dino sprites
    string sprite[3] = {
        "  __  ",
        " |o_) ",
        "_|__| "
    };
    
    string duckSprite[2] = {
        "  ___  ",
        "_|o__)_"
    };
    
    Dinosaur() {
        x = 8;
        y = GROUND_Y - 2;
        velocity = 0;
        isJumping = false;
        isDucking = false;
    }
    
    void jump() {
        if (!isJumping && !isDucking) {
            isJumping = true;
            velocity = -5;
        }
    }
    
    void duck(bool ducking) {
        if (!isJumping) {
            isDucking = ducking;
            if (ducking) y = GROUND_Y - 1;
            else y = GROUND_Y - 2;
        }
    }
    
    void update() {
        if (isJumping) {
            y += velocity;
            velocity++;
            
            if (y >= GROUND_Y - 2) {
                y = GROUND_Y - 2;
                isJumping = false;
                velocity = 0;
            }
        }
    }
    
    void draw() {
        setColor(10); // Green
        if (isDucking) {
            for (int i = 0; i < 2; i++) {
                gotoxy(x, y + i);
                cout << duckSprite[i];
            }
        } else {
            for (int i = 0; i < 3; i++) {
                gotoxy(x, y + i);
                cout << sprite[i];
            }
        }
        setColor(7);
    }
};

// Obstacle Class
class Cactus {
public:
    int x, y;
    int type;
    
    string smallCactus[2] = {
        " | ",
        "/|\\"
    };
    
    string bigCactus[3] = {
        " |  ",
        "/| |",
        " | |"
    };
    
    Cactus(int startX) {
        x = startX;
        type = rand() % 2;
        y = (type == 0) ? GROUND_Y - 1 : GROUND_Y - 2;
    }
    
    void update(int speed) {
        x -= speed;
    }
    
    void draw() {
        setColor(6); // Yellow/Brown
        if (type == 0) {
            for (int i = 0; i < 2; i++) {
                gotoxy(x, y + i);
                cout << smallCactus[i];
            }
        } else {
            for (int i = 0; i < 3; i++) {
                gotoxy(x, y + i);
                cout << bigCactus[i];
            }
        }
        setColor(7);
    }
    
    bool isOffScreen() {
        return x < 0;
    }
};

// Game Class
class DinoGame {
private:
    Dinosaur dino;
    vector<Cactus> cacti;
    int score;
    int highScore;
    int speed;
    int frameCount;
    bool gameOver;
    bool paused;
    
public:
    DinoGame() {
        reset();
        highScore = 0;
    }
    
    void reset() {
        dino = Dinosaur();
        cacti.clear();
        cacti.push_back(Cactus(WIDTH));
        score = 0;
        speed = 1;
        frameCount = 0;
        gameOver = false;
        paused = false;
    }
    
    void drawGround() {
        setColor(8);
        gotoxy(0, GROUND_Y + 1);
        for (int i = 0; i < WIDTH; i++) {
            cout << ((i + frameCount) % 4 == 0 ? "." : "_");
        }
        setColor(7);
    }
    
    void drawScore() {
        setColor(15);
        gotoxy(WIDTH - 20, 2);
        cout << "Score: " << score;
        gotoxy(WIDTH - 20, 3);
        cout << "High:  " << highScore;
        setColor(7);
    }
    
    void drawTitle() {
        setColor(11);
        gotoxy(WIDTH/2 - 8, 1);
        cout << "=== DINO GAME ===";
        setColor(7);
    }
    
    void drawControls() {
        setColor(8);
        gotoxy(2, HEIGHT + 2);
        cout << "[SPACE/W] Jump   [S] Duck   [P] Pause   [Q] Quit";
        setColor(7);
    }
    
    void clearScreen() {
        for (int y = 3; y <= HEIGHT; y++) {
            gotoxy(0, y);
            cout << string(WIDTH, ' ');
        }
    }
    
    void draw() {
        clearScreen();
        drawTitle();
        drawGround();
        drawScore();
        
        // Draw cacti
        for (auto& cactus : cacti) {
            cactus.draw();
        }
        
        // Draw dino
        dino.draw();
        
        drawControls();
    }
    
    void input() {
        if (_kbhit()) {
            char ch = _getch();
            ch = tolower(ch);
            
            if (ch == ' ' || ch == 'w') {
                if (gameOver) {
                    reset();
                } else {
                    dino.jump();
                }
            }
            else if (ch == 's') {
                dino.duck(true);
            }
            else if (ch == 'p') {
                paused = !paused;
            }
            else if (ch == 'q') {
                exit(0);
            }
        } else {
            dino.duck(false);
        }
    }
    
    void spawnCactus() {
        int minGap = 30 - speed * 2;
        if (minGap < 15) minGap = 15;
        
        if (cacti.empty() || cacti.back().x < WIDTH - minGap - rand() % 20) {
            cacti.push_back(Cactus(WIDTH + rand() % 10));
        }
    }
    
    bool checkCollision() {
        for (auto& cactus : cacti) {
            int cactusWidth = (cactus.type == 0) ? 3 : 4;
            int cactusHeight = (cactus.type == 0) ? 2 : 3;
            
            int dinoWidth = dino.isDucking ? 7 : 6;
            int dinoHeight = dino.isDucking ? 2 : 3;
            
            // Simple box collision
            if (dino.x + dinoWidth > cactus.x && 
                dino.x < cactus.x + cactusWidth &&
                dino.y + dinoHeight > cactus.y &&
                dino.y < cactus.y + cactusHeight) {
                return true;
            }
        }
        return false;
    }
    
    void update() {
        if (paused || gameOver) return;
        
        frameCount++;
        
        // Update dinosaur
        dino.update();
        
        // Update cacti
        for (auto& cactus : cacti) {
            cactus.update(speed);
        }
        
        // Remove off-screen cacti
        while (!cacti.empty() && cacti[0].isOffScreen()) {
            cacti.erase(cacti.begin());
            score += 10;
        }
        
        // Spawn new cacti
        spawnCactus();
        
        // Increase difficulty
        if (frameCount % 200 == 0 && speed < 4) {
            speed++;
        }
        
        // Score increment
        if (frameCount % 5 == 0) {
            score++;
        }
        
        // Check collision
        if (checkCollision()) {
            gameOver = true;
            if (score > highScore) {
                highScore = score;
            }
        }
    }
    
    void showGameOver() {
        setColor(12);
        gotoxy(WIDTH/2 - 6, HEIGHT/2 - 1);
        cout << "GAME OVER!";
        gotoxy(WIDTH/2 - 10, HEIGHT/2 + 1);
        cout << "Final Score: " << score;
        gotoxy(WIDTH/2 - 12, HEIGHT/2 + 3);
        cout << "Press SPACE to restart";
        setColor(7);
    }
    
    void showPaused() {
        setColor(14);
        gotoxy(WIDTH/2 - 4, HEIGHT/2);
        cout << "PAUSED";
        setColor(7);
    }
    
    void run() {
        hideCursor();
        system("cls");
        
        while (true) {
            input();
            update();
            draw();
            
            if (gameOver) {
                showGameOver();
            } else if (paused) {
                showPaused();
            }
            
            Sleep(40); // ~25 FPS
        }
    }
};

int main() {
    srand(time(0));
    
    // Set console size
    system("mode con: cols=75 lines=25");
    system("title Chrome Dino Game - C++");
    
    DinoGame game;
    game.run();
    
    return 0;
}