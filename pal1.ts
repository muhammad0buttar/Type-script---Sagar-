// 
let food: string = "roast";
let reversed: string = " ";
for (let i = food.length - 1; i>=0; i --) {
reversed = reversed + food [i];
}
console.log(reversed);


if (food === reversed){


console.log("palindrome");
}
else {
console.log("non palindrome");


}