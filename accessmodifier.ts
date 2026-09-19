class BankAccount {
  //  ACCESS MODIFIER: 'private' restricts visibility. 
  // The 'balance' property can ONLY be accessed or changed inside this class.
  private balance: number;

  // ACCESS MODIFIER: 'public' constructor.
  // It can be called from anywhere outside the class to initialize an object.
  public constructor(initialBalance: number = 1000) {
    //  OPERATORS USED HERE:
    // '>=' (Relational Operator): Checks if initialBalance is greater than or equal to 0.
    // '?' and ':' (Ternary Conditional Operator): If the condition is true, sets balance to initialBalance; otherwise, sets it to 0.
    // '=' (Assignment Operator): Assigns the final calculated value to this.balance.
    //this is a keywowwrd thet refers to the current instance of the class. It is used to access properties and methods of the class from within
    //  its own methods. when I typye this.balance, I am referring to the balance property of the specific BankAccount object that is being created
    //  or manipulated. I am telling hey look at the permanent storage of this specific object and set it to the initialBalance if it is valid, 
    // or to 0 if it is not.
    // === same type number and same value whehn comparing two values. 
    // It is a strict equality operator that checks both the value and the type of the operands.
    //  == only checks the value of the operands, 
    // allowing for type coercion if they are of different types.
    this.balance = initialBalance >= 0 ? initialBalance : 0;

  }

  //  ACCESS MODIFIER: 'public' method.
  // Any script that imports or creates this class can call this method.
   // Void This method changes data, but doesn't hand anything back.
  public deposit(amount: number): void {
    //  OPERATOR: '>' (Relational Operator) verifies if the amount is positive.
    if (amount > 0) {
      //  OPERATOR: '+=' (Addition Assignment Operator).
      // It adds the amount to the current balance and saves the new total. (Short for: this.balance = this.balance + amount)
      this.balance += amount;
    }
  }

  // ACCESS MODIFIER: 'public' method.
  // Provides a secure gateway for external scripts to request a balance deduction.
  public withdraw(amount: number): boolean {
    // OPERATOR: '<=' (Relational Operator) checks if the amount is zero or negative.
    if (amount <= 0) {
      console.log("Amount must be greater than zero.");
      return false;
    }
    //  OPERATOR: '>' (Relational Operator) checks if withdrawal exceeds available funds.
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return false;
    }
    
    //  OPERATOR: '-=' (Subtraction Assignment Operator).
    // It subtracts the amount from the current balance and saves the new total. (Short for: this.balance = this.balance - amount)
    this.balance -= amount;
    return true;
  }

  //  ACCESS MODIFIER: 'public' method.
  // Allows outside code to safely read the value of 'balance' without being able to modify it directly.
  public getBalance(): number {
    return this.balance;
  }
}

// 
// Object Instantiation & Testing
// 

// OPERATOR: '=' (Assignment Operator) assigns the newly created object instance to the 'account' variable.
let account = new BankAccount(10000); // Initializes with a balance of 10,000

account.deposit(5000);                
account.withdraw(2000);               

console.log(account.getBalance()); // Prints the remaining balance
