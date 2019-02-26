// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
    let count = 0;
    return function () {
        return count+=1;
    }
  // Return a function that when invoked increments and returns a counter variable.
};
const counts = counter();
console.log(counts());
console.log(counts());
console.log(counts());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    let counter = 0;
    return {
        increment: () => counter+=1,
        decrement: () => counter-=1
    };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const countObject = counterFactory();
console.log(countObject.increment());
console.log(countObject.increment());
console.log(countObject.increment());
console.log(countObject.decrement());
