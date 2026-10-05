let anyname: string = "madam";
let reversed: string= "";
for (let i = anyname.length- 1; i >= 0; i --){
    reversed = reversed + anyname[i];
}
console.log(reversed);
if (anyname === reversed){
    console.log("palindrome");
    }else {
 console.log("not a palindrome");
    }