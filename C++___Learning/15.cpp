// * * * * * * * * * * * * * * * * * * * *
//             * * * * * * * * * * * * * *
//                       * * * * * * * * *
//                               * * * * *
//                                   * * *
//                                     * *
//                                       *
//                                       *
//                                       *
//                                       *
//                                     * *
//                                   * * *
//                               * * * * *
//                       * * * * * * * * *
//             * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * *
#include <iostream>
using namespace std;

int main()
{
    int maxCols = 20;
    int rows = 16;

    for (int i = 0; i < rows; i++)
    {
        int cols; // number of stars in this row

        // upper half (shrinking part)
        if (i == 0)
            cols = 20;
        else if (i == 1)
            cols = 14;
        else if (i == 2)
            cols = 9;
        else if (i == 3)
            cols = 5;
        else if (i == 4)
            cols = 3;
        else if (i == 5)
            cols = 2;
        else if (i >= 6 && i <= 9)
            cols = 1;
        // lower half (expanding part)
        else if (i == 10)
            cols = 2;
        else if (i == 11)
            cols = 3;
        else if (i == 12)
            cols = 5;
        else if (i == 13)
            cols = 9;
        else if (i == 14)
            cols = 14;
        else
            cols = 20;

        // print spaces for alignment
        for (int j = 0; j < (maxCols - cols); j++)
        {
            cout << "  ";
        }

        // print stars
        for (int j = 0; j < cols; j++)
        {
            cout << "* ";
        }

        cout << endl;
    }

    return 0;
}

