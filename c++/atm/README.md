# ATM System

This project is a fully functional ATM system implemented in C++. It allows users to perform various banking operations such as checking their balance, making deposits, and withdrawing funds. The system is designed to simulate a real-world ATM experience.

## Project Structure

```
atm-system
├── src
│   ├── main.cpp        # Entry point of the application
│   ├── atm.cpp         # Implementation of the ATM class
│   ├── atm.h           # Header file for the ATM class
│   ├── account.cpp      # Implementation of the Account class
│   ├── account.h        # Header file for the Account class
│   ├── utils.cpp        # Utility functions implementation
│   └── utils.h          # Header file for utility functions
└── README.md           # Project documentation
```

## Features

- User authentication
- Balance inquiries
- Deposit and withdrawal functionalities
- Transaction history tracking
- Input validation and error handling

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd atm-system
   ```

3. Compile the source code:
   ```
   g++ src/*.cpp -o atm_system
   ```

4. Run the application:
   ```
   ./atm_system
   ```

## Usage Guidelines

- Upon running the application, users will be prompted to enter their credentials.
- After successful authentication, users can access the main menu to perform various transactions.
- Follow the on-screen instructions to navigate through the options.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.