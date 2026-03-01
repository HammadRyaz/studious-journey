#include <iostream>
using namespace std;

int main()
{
    int n = 8;
    int a = 1, b = 1;
    for (int i = 1; i <= n; i++)
    {
        int stars;
        if (i == 1 || i == 2)
        {
            stars = 1;
        }
        else
        {
            stars = a + b;
            a = b;
            b = stars;
        }
        for (int j = 1; j <= stars; j++)
        {
            cout << "*";
        }
        cout << endl;
    }

    return 0;
}
// *
// *
// **
// ***
// *****
// ********
// *************
// *********************