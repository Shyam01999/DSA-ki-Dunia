let a = process.argv[2];
console.log("The value of a is", a);

let oddNumber = []
for(let number = 1; number <= a; number++){
    if(number % 2 !== 0){
        oddNumber.push(number)
    }
}

console.log("The odd numbers are ", oddNumber);