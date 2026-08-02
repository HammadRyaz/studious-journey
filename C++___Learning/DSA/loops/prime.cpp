#include <iostream>
using namespace std;
int main()
{
    bool isPrime(true);
    int n;
    cout << "Enter A Number to Check ";
    cin >> n;
    for (int i = 2; i * i <= n; i++)
    {
        if (n % i == 0)
        {
            isPrime = false;
            break;
        }
    }
    isPrime ? cout << n << " Is prime " : cout << "It's not a prime number";
    return 0;
}
