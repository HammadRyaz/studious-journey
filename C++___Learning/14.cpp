#include <iostream>
using namespace std;

int main()
{
    int n = 9;          // total rows
    int totalCols = 18; // first row total numbers

    for (int i = 1; i <= n; i++)
    {
        if (i == 1 || i == n)
        {
            for (int j = 1; j <= totalCols; j++)
            {
                cout << "#";
            }
        }
        else
        {
            // Left numbers
            for (int j = 1; j <= (n - i + 1); j++)
            {
                cout << "#";
            }
            // Spaces
            for (int s = 1; s <= (i - 1) * 2; s++)
            {
                cout << " ";
            }
            // Right numbers
            for (int j = 1; j <= (n - i + 1); j++)
            {
                cout << "#";
            }
        }

        cout << endl;
    }

    return 0;
}

/*
##################
########  ########
#######    #######
######      ######
#####        #####
####          ####
###            ###
##              ##
##################
 */