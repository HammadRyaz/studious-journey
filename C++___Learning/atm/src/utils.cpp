#include <iostream>
#include <limits>
#include "utils.h"

using namespace std;

bool validateInput(int& input, int min, int max) {
    while (true) {
        cin >> input;
        if (cin.fail() || input < min || input > max) {
            cin.clear(); // clear the error flag
            cin.ignore(numeric_limits<streamsize>::max(), '\n'); // discard invalid input
            cout << "Invalid input. Please enter a number between " << min << " and " << max << ": ";
        } else {
            cin.ignore(numeric_limits<streamsize>::max(), '\n'); // discard the rest of the line
            return true;
        }
    }
}

string formatCurrency(double amount) {
    char buffer[50];
    snprintf(buffer, sizeof(buffer), "%.2f", amount);
    return string("$") + buffer;
}