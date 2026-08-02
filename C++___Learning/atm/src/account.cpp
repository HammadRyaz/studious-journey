#include "account.h"

Account::Account(std::string accountHolder, double initialBalance) {
    this->accountHolder = accountHolder;
    this->balance = initialBalance;
}

double Account::getBalance() const {
    return balance;
}

void Account::deposit(double amount) {
    if (amount > 0) {
        balance += amount;
    }
}

bool Account::withdraw(double amount) {
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        return true;
    }
    return false;
}

std::string Account::getAccountInfo() const {
    return "Account Holder: " + accountHolder + "\nBalance: " + std::to_string(balance);
}