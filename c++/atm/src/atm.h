#ifndef ATM_H
#define ATM_H

#include <iostream>
#include "account.h"

class ATM
{
public:
    ATM(); // Add this line
    bool authenticateUser(const std::string &username, const std::string &password);
    void processTransaction(int choice);
    void showBalance();

private:
    Account &account;
};

#endif // ATM_H