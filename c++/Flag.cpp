#include <iostream>
#include <string>
#include <cmath>
using namespace std;
int main()
{
    const int height = 15;
    const int width = 40;
    const int center = 7; // middle row (0-based)
    const int indent = 2; // spaces after left border
    const int gap = 5;    // gap between inner star blocks

    const string border(width, '*');
    const int inner_full = width - 1 - indent;
    const int inner_pair = width - 1 - indent - gap;

    cout << border << '\n';
    for (int i = 1; i < height - 1; ++i)
    {
        // Center row removed here
        if (i == 1 || i == 2 || i == 12 || i == 13)
        {
            cout << '*'
                 << string(indent, ' ')
                 << string(inner_full, '*')
                 << '\n';
        }
        else
        {
            int d = abs(i - center);
            int left = 15 + max(0, d - 2);
            int right = inner_pair - left;

            cout << '*'
                 << string(indent, ' ')
                 << string(left, '*')
                 << string(gap, ' ')
                 << string(right, '*')
                 << '\n';
        }
    }
    cout << border << '\n';
    return 0;
}