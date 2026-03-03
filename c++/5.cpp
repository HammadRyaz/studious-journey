#include <iostream>
using namespace std;
/* Example3: Program to Print a Half-Pyramid Using *
 *
 **
 ***
 ****
 *****
 */
int main()
{
    int n = 5;
    for (size_t i = 0; i < n; i++)
    {
        for (size_t j = 0; j <= i; j++)
        {
            cout << "*";
        }
        cout << "\n";
    }
    return 0;
}