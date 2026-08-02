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

        // Left spaces
        for (int s = 0; s < dist; s++)
            cout << " ";

        cout << "*";

        // Inner spaces
        int innerSpaces = 2 * (n - dist - 1) - 1;
        if (innerSpaces >= 0)
        {
            for (int s = 0; s < innerSpaces; s++)
                cout << " ";
            cout << "*";
        }

        cout << endl;
    }

    return 0;
}
