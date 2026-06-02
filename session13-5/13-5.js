const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}
let sumEven = 0;
let sumOdd = 0;

for (const num of numbers) {
    if (num % 2 === 0) {
        sumEven += num;
    } else {
        sumOdd += num;
    }
}

console.log("Generated numbers:", numbers);
console.log("Sum of even numbers:", sumEven);
console.log("Sum of odd numbers:", sumOdd);
