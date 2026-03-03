#include <iostream>
using namespace std;
/* Example 2.1 Print this pattern using WHILE LOOP
******
******
******
****** */
int main()
{
    int i = 1;
    int n = 4;
    while (i <= n)
    {
        for (size_t j = 1; j <= 6; j++)
        {
            cout << "*";
        }
        cout << endl;
        i++;
    }

    return 0;
}