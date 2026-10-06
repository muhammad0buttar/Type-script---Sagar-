// 1. Declaration and initialization
let data: (string | number)[] = ["Sagar", 25, "Bangalore"];

// 2. Adding allowed values
data.push(100);       // Valid (number)
data.push("India");   // Valid (string)

// 3. Adding an unsupported type causes a TypeScript error
// data.push(true);   // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

// 4. Accessing elements
console.log(data);    // Output: ["Sagar", 25, "Bangalore", 100, "India"]