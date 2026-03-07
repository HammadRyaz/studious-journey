#include <iostream>
#include "atm.h"
#include "account.h"
#include "utils.h"

using namespace std;

ATM::ATM()
{
    // Initialize members if needed
}

void ATM::authenticateUser()
{
    string username;
    string password;

    cout << "Enter Username: ";
    cin >> username;
    cout << "Enter Password: ";
    cin >> password;

    // Here you would typically check against a database or a predefined list
    if (username == "user" && password == "pass")
    {
        cout << "Authentication successful!" << endl;
    }
    else
    {
        cout << "Authentication failed. Please try again." << endl;
        authenticateUser(); // Retry authentication
    }
}

void ATM::displayMenu()
{
    cout << "ATM Menu:" << endl;
    cout << "1. Check Balance" << endl;
    cout << "2. Deposit" << endl;
    cout << "3. Withdraw" << endl;
    cout << "4. Transaction History" << endl;
    cout << "5. Exit" << endl;
}

void ATM::processTransaction(int choice, Account &account)
{
    switch (choice)
    {
    case 1:
        showBalance(account);
        break;
    case 2:
        deposit(account);
        break;
    case 3:
        withdraw(account);
        break;
    case 4:
        // Show transaction history (not implemented in this example)
        cout << "Transaction history feature is not implemented yet." << endl;
        break;
    case 5:
        cout << "Thank you for using the ATM. Goodbye!" << endl;
        break;
    default:
        cout << "Invalid choice. Please try again." << endl;
    }
}

void ATM::showBalance(Account &account)
{
    cout << "Your current balance is: " << formatCurrency(account.getBalance()) << endl;
}

void ATM::deposit(Account &account)
{
    double amount;
    cout << "Enter amount to deposit: ";
    cin >> amount;
    if (validateInput(amount))
    {
        account.deposit(amount);
        cout << "Deposit successful!" << endl;
    }
    else
    {
        cout << "Invalid amount. Please try again." << endl;
    }
}

void ATM::withdraw(Account &account)
{
    double amount;
    cout << "Enter amount to withdraw: ";
    cin >> amount;
    if (validateInput(amount) && account.getBalance() >= amount)
    {
        account.withdraw(amount);
        cout << "Withdrawal successful!" << endl;
    }
    else
    {
        cout << "Invalid amount or insufficient funds. Please try again." << endl;
    }
}