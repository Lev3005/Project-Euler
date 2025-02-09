const fibonachiNumbers = [1, 2]
const fibonachiNumbersEven = []

let fibonachiNumbersSum = 0
let index1 = 0
let index2 = 1

fibonachiNumbers.push(fibonachiNumbers[index1] + fibonachiNumbers[index2])

while (fibonachiNumbers[fibonachiNumbers.length - 1] < 4000000) {

    index1 = index1 + 1
    index2 = index2 + 1
    
    fibonachiNumbers.push(fibonachiNumbers[index1] + fibonachiNumbers[index2])

}

fibonachiNumbers.forEach (function (item) {

    if (item % 2 == 0) {

        fibonachiNumbersEven.push(item)

    }

})

for (let i = 0; i < fibonachiNumbersEven.length; i++) {

    fibonachiNumbersSum += fibonachiNumbersEven[i]

}

console.log(fibonachiNumbersSum)