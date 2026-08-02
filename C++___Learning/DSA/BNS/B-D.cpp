#include <iostream>
using namespace std;

int main()
{
    int n = 5;
    int pow = 1;
    int rem = 0;
    int binForm = 0;
    while (n > 0)
    {
        rem = n % 2;
        binForm += rem * pow;
        pow *= 10;
        n /= 2;
    }
    cout << binForm;
    return 0;
}