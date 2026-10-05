// why do we use interfaces in TypeScript?
// Interfaces in TypeScript are used to define the structure of an object. They provide a way to describe the shape of an object, including its properties and their types. This allows for better type checking and code organization, making it easier to work with complex data structures and ensuring that objects adhere to a specific contract.

interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}
// add class and implement the interface
class EmployeeClass implements Employee {
    private _id: number;
    
    
    // Add a constructor to initialize the properties of the class.

    constructor(id: number, name: string, position: string, salary: number) {
        this._id = id;
        this._name = name;
        this._position = position;
        this._salary = salary;
    }
}// add encapsulation to the class by making th 
properties private and adding getter and setter methods

//add a function that takes an object of type Employee as a parameter and returns void
//Void is return typye of a function that does not return a value.
//  It is used to indicate that a function does not produce any output or return any data.
//  In TypeScript, when a function is declared with a return type of void, 
// it means that the function is intended to perform some actions or side effects
// without returning any value to the caller. 
// We will get these results 

function displayEmployee(emp: Employee): void {
    console.log(`Employee ID: ${emp.id}`);
    console.log(`Employee Name: ${emp.name}`);
    console.log(`Employee Position: ${emp.position}`);
    console.log(`Employee Salary: ${emp.salary}`);
}

// used for creating a variable of type Employee and passing
// it to the displayEmployee function
let emp1: Employee = {
    id: 1,
    name: "Norah",
    position: "Software Engineer",
    salary: 75000
};
// add another variable of type EmployeeClass and passing it to 
// the displayEmployee function
let emp2: EmployeeClass = new EmployeeClass(2, "Shasha", "Project Manager", 85000);
// displayEmployee expects a single Employee object, so pass emp2
// as a separate call or convert it to the Employee interface shape
// Since emp2 is an instance of EmployeeClass, 
// it already adheres to the Employee interface,
//  so we can pass it directly to the displayEmployee function.

displayEmployee(emp1);
displayEmployee(emp2);