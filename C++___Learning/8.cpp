#include <iostream>
using namespace std;
/* Example6: Write a program in C++ for Inverted Half-PyramidUsing
Number. 12345
1234
123
12
1 */
int main()
{
    int count = 4;
    for (size_t i = count; i >= 1; i--)
    {
        for (size_t j = 1; j <= i; j++)
        {
            cout << j;
        }
        cout << endl;
    }
    return 0;
}