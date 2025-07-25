let a = process.argv[2];
console.log("The value of a is", a);

let evennum = []
for(let number = 2; number <= a; number++){
    if(number % 2 === 0){
        evennum.push(number)
    }
}

console.log("evennum", evennum)