#include<iostream>
using namespace std;

int main()
{
    int n = 5;

for (int row = 0; row < n; row++)
{
    for (int col = 0; col < n; col++)
    {
        if (row == col || row + col == n - 1)
            cout << "*";
        else
            cout << " ";
    }
    cout << endl;
}


// *   *
//  * *
//   *
//  * *
// *   *

    return 0;
}