const numbers = [];
for (let i = 0; i < 20; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}
let k = prompt("Enter a number to search for:");
k = parseInt(k);
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === k) {
        count++;
    }
}
if (count > 0) {
    console.log(`The number ${k} appears ${count} times in the array.`);
} else {
    console.log(`The number ${k} does not appear in the array.`);
}   
