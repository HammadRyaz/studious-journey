#include <iostream>
using namespace std;

int main()
{
    int N = 4;
    int totalRows = 2 * N - 1;

    for (int row = 1; row <= totalRows; row++)
    {
        int stars = (row <= N) ? row : (2 * N - row);
        int spaces = 2 * (N - stars);

        // Left stars
        for (int i = 0; i < stars; i++)
            cout << "*";

        // Inner spaces
        for (int i = 0; i < spaces; i++)
            cout << " ";

        // Right stars
        for (int i = 0; i < stars; i++)
            cout << "*";

        cout << endl;
    }

    return 0;
}
