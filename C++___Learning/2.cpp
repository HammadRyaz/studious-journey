#include <iostream>
using namespace std;

int main()
{
    int n = 4;
    for (int i = 0; i < n; i++)
    {
        for (int spaces = 0; spaces < n - (i - 1); spaces++)
        {
            cout << " ";
        }
        for (int left = 1; left <= (i + 1); left++)
        {
            cout << left;
        }
        for (int right = i; right > 0; right--)
        {
            cout << right;
        }

        cout << endl;
    }

    return 0;
}

/*
     1
    121
   12321
  1234321
*/