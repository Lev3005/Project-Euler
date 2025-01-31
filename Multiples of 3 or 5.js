const array = []
const array2 = []
let sumArray = 0

for (let i = 0; i < 1000; i++) {	

    array.push(i);
}

for (let i = 0; i < array.length; i++) {

    if (i % 3 == 0 || i % 5 == 0) {
        
        array2.push(i);
    }
}

for (let i = 0; i < array2.length; i++) {

    sumArray += array2[i]
}

console.log(sumArray)