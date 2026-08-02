#include <iostream>
using namespace std;

int main()
{
    int N = 4;
    int innerSpaceLen = N + N;
    // Upper Half
    for (int i = 0; i < N; i++)
    {
        for (int l = 0; l < i + 1; l++)
        {
            cout << "*";
        }
        innerSpaceLen = innerSpaceLen - 2;
        for (int space = 0; space < innerSpaceLen; space++)
        {
            cout << " ";
        }
        for (int r = 0; r < i + 1; r++)
        {
            cout << "*";
        }
        cout << endl;
    }
    // Lower Half
    for (int i = N - 1; i > 0; i--)
    {
        for (int l = 0; l < i; l++)
        {
            cout << "*";
        }

        innerSpaceLen = innerSpaceLen + 2;
        for (int space = 0; space < innerSpaceLen; space++)
        {
            cout << " ";
        }

        for (int r = 0; r < i; r++)
        {
            cout << "*";
        }

        cout << endl;
    }

    return 0;
}

// *      *
// **    **
// ***  ***
// ********
// ***  ***
// **    **
// *      *