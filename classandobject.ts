// Define the Employee Class blueprint
class Employee {
    // Properties (Data)
    id: number;
    salary: number;
    designation: string;

    // The constructor sets up the initial values when you create an object
    constructor(id: number, salary: number, designation: string) {
        this.id = id; //"this" belongs to the current instance  or objectof the class
        this.salary = salary;
        this.designation = designation;
    }

    // Function 1: 
    logIn() {
        console.log(`Employee ${this.id} (${this.designation}) has signed in.`);
    }

    // Function 2: logOut method
    logOut() {
        console.log(`Employee ${this.id} has signed out.`);
    }
    
}


// Create an employee object using the 'new' keyword
const employee1 = new Employee(101, 75000, "QA Automation Engineer");
const employee2 = new Employee(102, 80000, "Software Engineer");

// Access properties
console.log("Employee Designation:", employee1.designation); // Output: QA Automation Engineer
console.log("Employee Salary:", employee1.salary);           // Output: 75000
console.log("Employee Designation:", employee2.designation); // Output: Software Engineer
console.log("Employee Salary:", employee2.salary);           // Output: 80000

// Call the actions (Functions)
employee1.logIn();  // Output: Employee 101 (QA Automation Engineer) has logged in.
employee2.logOut(); // Output: Employee 102 has logged out.
