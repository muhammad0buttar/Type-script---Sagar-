let str: string ="halloween";
//object to store the count of each character
let count:{[key:string]:number}={};
//loop through each character in the string
for (const ch of str) {
    count[ch] = (count[ch] ?? 0) + 1;
}
console.log(count);
//dupicate characters
for (const ch in count) {
    if (count[ch] > 1) {
        console.log(ch);
    }
}

