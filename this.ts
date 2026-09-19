//An object can also contain a function.
//add is a method because it is a function inside an object.
//What is this?
//"The num1 property belonging to this object."
let calculator = {
    num1: 10,
    num2: 20,

    add: function() {
        return this.num1 + this.num2;
    }
};

console.log(calculator.add());
