#include <iostream>
using namespace std;

int main()
{
    for (int i = (int)'A'; i <= (int)'D'; i++)
    {
        for (int j = (int)'A'; j <= (int)'D'; j++)
        {
            cout << (char)j;
        }
        cout << endl;
    }

    return 0;
}

// ABCD
// ABCD
// ABCD
// ABCD