#include <iostream>
using namespace std;

int main()
{
    int n = 4;
    for (int i = 0; i < n; i++)
    {
        for (int space = 0; space < n - i - 1; space++)
        {
            cout << " ";
        }
        for (int j = 0; j < (i + 1); j++)
        {
            cout << j + 1;
        }
        for (int j = i ; j > 0; j--)
        {
            cout << j;
        }
        cout << endl;
    }
    return 0;
}

//    1
//   121
//  12321
// 1234321