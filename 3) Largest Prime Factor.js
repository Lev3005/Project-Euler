let n = 600851475143
let largestPrime = -1;

while (n % 2 === 0) {

    largestPrime = 2;
    n /= 2;

}

for (let i = 3; i * i <= n; i += 2) {

    while (n % i === 0) {

        largestPrime = i;
        n /= i;

    }

}

if (n > 2) {

    largestPrime = n;

}

console.log(largestPrime)