#include <iostream>
using namespace std;

int main()
{
    int width = 8;  
    int height = 6; 

    for (int i = 0; i < height; i++)
    {
        if (i == 0 || i == height - 1)
        {
            // top & bottom row
            for (int j = 0; j < width; j++)
            {
                cout << "*";
            }
        }
        else
        {
            // middle rows
            cout << "*";
            for (int j = 0; j < width - 2; j++)
            {
                cout << " ";
            }
            cout << "*";
        }
        cout << endl; 
    }
    return 0;
}


// ********
// *      *
// *      *
// *      *
// *      *
// ********