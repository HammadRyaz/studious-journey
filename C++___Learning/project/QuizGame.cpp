#include <iostream>
#include <string>
// #include <algorithm>
// #include <cctype>
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
using namespace std;

int main()
{
    // Store questions in an array
    string questions[] = {
        "What is the capital of France?",
        "What is 2 + 2?",
        "What is the largest planet in our solar system?",
        "Who painted the Mona Lisa?",
        "What year did World War II end?",
        "What is the chemical symbol for gold?",
        "How many continents are there?",
        "What is the speed of light (approximately)?",
        "Who wrote 'Romeo and Juliet'?",
        "What is the smallest prime number?"};

    // Store multiple choice options
    string options[][4] = {
        {"A. London", "B. Berlin", "C. Paris", "D. Madrid"},
        {"A. 3", "B. 4", "C. 5", "D. 6"},
        {"A. Mars", "B. Saturn", "C. Jupiter", "D. Neptune"},
        {"A. Van Gogh", "B. Picasso", "C. Da Vinci", "D. Monet"},
        {"A. 1943", "B. 1944", "C. 1945", "D. 1946"},
        {"A. Go", "B. Gd", "C. Au", "D. Ag"},
        {"A. 5", "B. 6", "C. 7", "D. 8"},
        {"A. 300,000 km/s", "B. 150,000 km/s", "C. 500,000 km/s", "D. 1,000,000 km/s"},
        {"A. Charles Dickens", "B. William Shakespeare", "C. Mark Twain", "D. Jane Austen"},
        {"A. 0", "B. 1", "C. 2", "D. 3"}};

    // Store correct answers (A, B, C, or D)
    char correctAnswers[] = {'C', 'B', 'C', 'C', 'C', 'C', 'C', 'A', 'B', 'C'};

    // Calculate number of questions
    int totalQuestions = sizeof(questions) / sizeof(questions[0]);

    // Variables for game
    char userAnswer;
    int score = 0;

    // Welcome message
    cout << MAGENTA << "========================================" << endl;
    cout << "       WELCOME TO THE QUIZ GAME!       " << endl;
    cout << "========================================" << RESET << endl;
    cout << MAGENTA << "\nYou will be asked " << totalQuestions << " questions." << endl;
    cout << "Choose the correct answer (A, B, C, or D)." << RESET << endl;
    cout << "\nPress Enter to start...";
    cin.get();

    // Clear screen (optional - works on most systems)
    system("clear || cls");

    // Loop through all questions
    for (int i = 0; i < totalQuestions; i++)
    {
        cout << YELLOW "\n========================================" << endl;
        cout << "\t   Question " << (i + 1) << " of " << totalQuestions << endl;
        cout << "========================================" << RESET << endl;

        // Display question
        cout << "\n"
             << GREEN << questions[i] << RESET << endl
             << endl;

        // Display options
        for (int j = 0; j < 4; j++)
        {
            cout << options[i][j] << endl;
        }

        // Get user answer
        cout << BLUE << "\nYour answer: " << RESET;
        cin >> userAnswer;

        // Convert to uppercase for case-insensitive comparison
        userAnswer = toupper(userAnswer);

        // Validate input
        while (userAnswer != 'A' && userAnswer != 'B' &&
               userAnswer != 'C' && userAnswer != 'D')
        {
            cout << RED << "Invalid input! Please enter A, B, C, or D: " << RESET;
            cin >> userAnswer;
            userAnswer = toupper(userAnswer);
        }

        // Check if answer is correct
        if (userAnswer == correctAnswers[i])
        {
            cout << GREEN << "\n✓ Correct! Well done!" << RESET << endl;
            score++;
        }
        else
        {
            cout << RED << "\n✗ Wrong! The correct answer was: " << correctAnswers[i] << RESET << endl;
        }

        // Pause before next question
        cout << "\nPress Enter to continue...";
        cin.ignore();
        cin.get();

        // Clear screen for next question
        system("clear || cls");
    }

    // Display final results
    cout << GREEN << "\n========================================" << endl;
    cout << "           QUIZ COMPLETED!              " << endl;
    cout << "========================================" << RESET << endl;

    cout << BG_BLUE << "\nFINAL SCORE:" << RESET << " " << BLUE << score << " out of " << totalQuestions << RESET << endl;

    // Calculate percentage
    double percentage = (static_cast<double>(score) / totalQuestions) * 100;

    // Give feedback based on score
    cout << "\n";
    if (percentage >= 90)
    {
        cout << BG_GREEN << "Percentage:" << RESET << "  " << GREEN << percentage << "%" << RESET << endl
             << endl;
        cout << GREEN << "🏆 EXCELLENT! You're a quiz master!" << RESET << endl;
    }
    else if (percentage >= 70)
    {
        cout << BG_GREEN << "Percentage:" << RESET << "  " << GREEN << percentage << "%" << RESET << endl
             << endl;
        cout << GREEN << "😊 GREAT JOB! Well done!" << RESET << endl;
    }
    else if (percentage >= 50)
    {
        cout << BG_GREEN << "Percentage:" << RESET << "  " << CYAN << percentage << "%" << RESET << endl
             << endl;

        cout << CYAN << "👍 GOOD EFFORT! Keep practicing!" << RESET << endl;
    }
    else
    {
        cout << BG_GREEN << "Percentage:" << RESET << "  " << RED << percentage << "%" << RESET << endl
             << endl;

        cout << RED << "📚 Keep studying! You'll do better next time!" << RESET << endl;
    }

    cout << BG_YELLOW << "\nThanks for playing!" << RESET << endl
         << endl;

    return 0;
}