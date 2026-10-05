let str: string = "hello";
let count: {[key: string]: number } = {};
for (const ch of str) {
    count[ch] = (count[ch] ?? 0) + 1;
}


console . log (count);
