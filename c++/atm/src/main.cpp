#include <iostream>
#include "atm.h"

int main()
{
    ATM atm;
    std::string username, password;

    std::cout << "Enter username: ";
    std::cin >> username;
    std::cout << "Enter password: ";
    std::cin >> password;

    if (atm.authenticateUser(username, password))
    {
        int choice;
        do
        {
            std::cout << "\nATM Menu:\n";
            std::cout << "1. Check Balance\n";
            std::cout << "2. Deposit\n";
            std::cout << "3. Withdraw\n";
            std::cout << "4. Transaction History\n";
            std::cout << "5. Exit\n";
            std::cout << "Enter choice: ";
            std::cin >> choice;
            atm.processTransaction(choice);
        } while (choice != 5);
    }
    else
    {
        std::cout << "Authentication failed.\n";
    }

    return 0;
}