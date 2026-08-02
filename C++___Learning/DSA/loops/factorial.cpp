#include <iostream>
using namespace std;
// factorial problem 
int main()
{
    int N;
    cout << "Enter Number ";
    cin >> N;
    int fact = 1;
    for (int i = N; i >= 1; i--)
    {
        fact *= i;
    }
    fact > 1 && cout << "Factorial of " << N << " is " << fact;
    return 0;
}