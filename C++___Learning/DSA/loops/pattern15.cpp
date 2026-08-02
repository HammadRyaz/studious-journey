#include <iostream>
using namespace std;

int main()
{
    int n = 4;
    int totalRows = 2 * n - 1;
    int mid = n - 1;

    for (int row = 0; row < totalRows; row++)
    {
        int dist = abs(row - mid);

        for (int s = 0; s < dist; s++)
            cout << " ";

        for (int s = 0; s < 2 * (n - dist) - 1; s++)
            cout << "*";

        cout << endl;
    }

    // *******
    //  *****
    //   ***
    //    *
    //   ***
    //  *****
    // *******

    return 0;
}