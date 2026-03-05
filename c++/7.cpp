#include <iostream>
using namespace std;
/* Example5: Program to Print an Inverted Half-Pyramid Using *.
*****
****
***
**
*
*/
int main()
{
    int count = 5;
    for (size_t i = count; i >= 1; i--)
    {
        for (size_t j = 1; j <= i; j++)
        {
            cout << "*";
        }
        cout << endl;
    }

    return 0;
}