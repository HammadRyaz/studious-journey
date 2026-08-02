#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> arr = {2, 2, 1, 1, 1, 2, 2};
    int sz = arr.size();
    int feq = 0, ans = 0;
    for (int i = 0; i < sz; i++)
    {
        if (feq == 0)
        {
            ans = arr[i]; 
        }
        if (arr[i] == ans)
        {
            feq++;
        }
        else
        {
            feq--;
        }
    }
    cout << ans;

    return 0;
}