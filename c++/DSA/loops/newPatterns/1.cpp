#include <iostream>
using namespace std;

int main()
{
    int n = 5;
    int mid = n - 1;
    int totalRow = 2 * n - 1;
    for (int row = 0; row < totalRow; row++)
    {
        int stars = row <= mid ? row + 1 : 2 * n - row - 1;
        for (int i = 0; i < stars; i++)
        {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *