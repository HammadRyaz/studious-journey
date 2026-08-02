#include <iostream>
using namespace std;

int main()
{
    int maxCols = 20, rows = 8;
    for (int i = 0; i < rows; i++)
    {
        int cols;
        if (i == 0)
        {
            cols = 20;
        }
        else if (i == 1)
        {
            cols = 14;
        }
        else if (i == 2)
        {
            cols = 9;
        }
        else if (i == 3)
        {
            cols = 5;
        }
        else if (i == 4)
        {
            cols = 3;
        }
        else if (i == 5)
        {
            cols = 2;
        }
        else
        {
            cols = 1;
        }
        for (int j = 0; j < (maxCols - cols); j++)
        {
            cout << " ";
        }
        for (int j = 0; j < cols; j++)
        {
            cout << "*";
        }
        cout << endl;
    }

    return 0;
}

// * * * * * * * * * * * * * * * * * * * *
//             * * * * * * * * * * * * * *
//                       * * * * * * * * *
//                               * * * * *
//                                   * * *
//                                     * *
//                                       *
//                                       *