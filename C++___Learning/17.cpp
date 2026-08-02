#include <iostream>
using namespace std;
//     1
//    12*
//   123**
//  1234***
// 12345****
int main()
{
    int count = 5;
    for (size_t i = 1; i <= count; i++)
    {
        for (size_t space = count - i; space >= 1; space--)
        {
            cout << " ";
        }
        for (size_t numbers = 1; numbers <= i; numbers++)
        {
            cout << numbers;
        }
        for (size_t star = 1; star <= i - 1; star++)
        {
            cout << "*";
        }

        cout << endl;
    }

    return 0;
}