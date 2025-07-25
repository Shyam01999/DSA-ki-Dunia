let n = process.argv[2];
console.log("n", process.argv);
let sum = 0;

for(let i = 1; i <= n; i++){
    sum += i;
}

console.log("Sum of numbers is:", sum);