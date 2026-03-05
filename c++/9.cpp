#include <iostream>
using namespace std;
/* Example 7:
1
23
456
78910 */
int main()
{
    int count = 4;
    int number = 1;
    for (size_t i = 1; i <= count; i++)
    {
        for (size_t j = 1; j <= i; j++)
        {
            cout << number;
            number = number + 1;
        }
        cout << endl;
    }
    return 0;
}