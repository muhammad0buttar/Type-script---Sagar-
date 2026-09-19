interface student{ 
    name: string;
    age: number;
    grade: string;
    //give an optional property
    readonly marks?: number;
    school?: string;
    //give a undefined property
    strenghth: undefined;    //give a property which is not visibble to public
    address?: string;
   // give a method why we use methods in interface because 
   // we can define the structure of the object and also define
   //  the behavior of the object
   display(): void; // void means the method does not return 
   // any value
    
}

// TypeScript gives an error if we add any extra property to the
// object that is not defined in the interface, or if one property
// is missing from the object that is defined in the interface.

// valid object
let s1: student = {
    name: "John",
    age: 20,
    grade: "A",
    address: "123 Main St",
    marks: 90,
    strenghth: undefined,
    display(): void {
        console.log(this.name, this.age, this.grade);
    }
};

// extra property is not allowed
// let s2: student = {
//     name: "Jane",
//     age: 22,
//     grade: "A",
//     
// };

// valid object with exactly the required properties
let s2: student = {
    name: "Jane",
    age: 22,
    grade: "A",
    strenghth: undefined,
    display(): void {
        console.log(this.name, this.age, this.grade);
    }
   
};
console.log(s1,s2);
console.log(s1.name);
