#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> arr = {3, -4, 5, 4, -1, 7, -8};
    int ms(arr[0]), cs(0);
    for (auto i : arr)
    {
        cs += i;
        (cs > ms) && (ms = cs);
        (cs < 0) && (cs = 0);
    }
    cout << "Max Sum : " << ms;
    return 0;
}