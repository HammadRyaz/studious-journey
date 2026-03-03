#include<iostream>
using namespace std;
/* Example4: Program to Print a Half-Pyramid Using Numbers.
1
12
123
1234
12345 */
int main()
{
    int count = 5;
    for (size_t i = 1; i <= count; i++)
    {
        for (size_t j = 1; j <= i; j++)
        {
            cout << j;
        }
        
        cout << endl;
    }
    
    return 0;
}