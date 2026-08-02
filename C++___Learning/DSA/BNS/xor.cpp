#include <iostream>
using namespace std;

int main()
{
    char c = 'A';                     // original character
    int key = 10;                     // secret key
    char encrypted = c ^ key;         // encrypt
    char decrypted = encrypted ^ key; // decrypt
    cout << "encrypted : " << encrypted << endl;
    cout << "decrypted : " << decrypted << endl;
    return 0;
}