#include <iostream>
using namespace std;

int main()
{
    int n = 101;
    int pow = 1;
    int rem = 0;
    int binForm = 0;
    while (n > 0)
    {
        rem = n % 10;
        binForm += rem * pow;
        pow *= 2;
        n /= 10;
    }
    cout << binForm;
    return 0;
}