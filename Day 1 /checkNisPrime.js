let n = parseInt(process.argv[2]);

let num = 2;

let count = 0;

while (num <= n - 1) {
          
    if (n % num == 0) {
        count++;
        break;
    }

    num++;
}

if (count !== 0) {
    console.log(n, "is not a prime number");
} else {
    console.log(n, "is a prime number");
}