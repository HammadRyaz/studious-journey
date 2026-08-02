#include <iostream>
using namespace std;
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
int main()
{
    int count = 5;
    for (size_t i = 1; i < count; i++)
    {
        for (size_t space = 1; space <= count - i; space++)
        {
            cout << " ";
        }
        for (size_t star = 1; star <= (2 * i) - 1; star++)
        {
            cout << "*";
        }
        cout << endl;
    }
    for (size_t i = count; i >= 1; i--)
    {
        for (size_t space = 1; space <= count - i; space++)
        {
            cout << " ";
        }
        for (size_t star = 2 * i - 1; star >= 1; star--)
        {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}