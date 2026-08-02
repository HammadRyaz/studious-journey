#include <iostream>
using namespace std;
// sum of all number from 1 to N which a divisible by 3.
int main()
{
    int sum(0), N(0);
    cout << "Enter N : ";
    cin >> N;
    for (int i = 1; i <= N; i++)
    {
        if (N % 3 == 0)
        {
            sum += i;
        }
    }
    cout << "Sum : " << sum;
    return 0;
}