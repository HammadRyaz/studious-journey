#include <iostream>
using namespace std;

int main()
{
    int n = 5;
    int totalRows = 2 * n - 1;
    int mid = n - 1;

    for (int row = 0; row < totalRows; row++)
    {
        int dist = abs(row - mid);

        int spaces = dist;
        int stars = 2 * (n - dist) - 1;

        for (int s = 0; s < spaces; s++)
            cout << " ";

        for (int s = 0; s < stars; s++)
            cout << "*";

        cout << endl;
    }

    return 0;
}

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *