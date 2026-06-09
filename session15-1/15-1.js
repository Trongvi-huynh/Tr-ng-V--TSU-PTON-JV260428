const array = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
console.log("Generated array:", array);
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 10){
        count++;
    }
}
console.log("Count of numbers greater than 10:", count);
