#include <iostream>
using namespace std;

int main()
{
    const int n = 4;
    for (int i = 0; i < n; i++)
    {
        for (int outerSpace = 0; outerSpace < n - i - 1; outerSpace++)
        {
            cout << " ";
        }
        cout << "*";
        if (i != 0)
        {
            for (int innerSpace = 0; innerSpace < 2 * i - 1; innerSpace++)
            {
                cout << " ";
            }
            cout << "*";
        }
        cout << endl;
    }
    // // Bottom half
    for (int i = n - 2; i >= 0; i--)
    {
        for (int space = 0; space < n - i - 1; space++)
        {
            cout << " ";
        }
        cout << "*";
        if (i > 0)
        {
            for (int space = 0; space < 2 * i - 1; space++)
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