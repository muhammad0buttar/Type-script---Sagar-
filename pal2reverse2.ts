let month: string = "test";
let reversed:string="";
for (let i = month.length - 1; i >= 0; i--) {
    reversed = reversed + month[i];
}
console.log(reversed);

if(month === reversed){
    console.log("palindrome");
}
else{
    console.log("not a palindrome");
}:
