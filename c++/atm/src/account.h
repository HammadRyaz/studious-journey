#ifndef ACCOUNT_H
#define ACCOUNT_H

#include <string>

class Account {
private:
    std::string accountNumber;
    std::string accountHolderName;
    double balance;

public:
    Account(const std::string& accNumber, const std::string& holderName, double initialBalance);
    
    double getBalance() const;
    void deposit(double amount);
    bool withdraw(double amount);
    std::string getAccountInfo() const;
};

#endif // ACCOUNT_H