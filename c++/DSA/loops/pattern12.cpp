#include <iostream>
using namespace std;

int main()
{
    int n = 4;
    // Upper Half
    for (int i = 0; i < n; i++)
    {
        for (int spaceL = n - i - 1; spaceL > 0; spaceL--)
        {
            cout << " ";
        }
        cout << "*";
        if (i > 0)
        {
            for (int spaceR = 0; spaceR < ((2 * i) - 1); spaceR++)
            {
                cout << " ";
            }
            cout << "*";
        }
        cout << endl;
    }

    // Lower Half
    for (int i = n - 2; i >= 0; i--)
    {
        for (int spaceL = n - i - 1; spaceL > 0; spaceL--)
        {
            cout << " ";
        }
        cout << "*";
        if (i != 0)
        {
            for (int spaceR = 0; spaceR < ((2 * i) - 1); spaceR++)
            {
                cout << " ";
            }
            cout << "*";
        }
        cout << endl;
    }

    return 0;
}

//    *
//   * *
//  *   *
// *     *
//  *   *
//   * *
//    *