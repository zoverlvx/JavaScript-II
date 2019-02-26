// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
    return cb(arr.length)
}

getLength(items, function(len) {
    console.log(len);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
    return cb(arr[arr.length-1]);
}

last(items, function (item) {
    console.log(item);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
    const result = x + y;
    return cb(result);
}

sumNums(1, 2, function (result) {
    console.log(result);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
    const result = x * y;
    return cb(result);
}

multiplyNums(1, 2, function (result) {
    console.log(result);
});

function contains(item, list, cb) {
    let isInList = false;
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
    const len = list.length;
    for(let i = 0; i < len; i+=1) {
        if (item === list[i]) isInList = true;
    }
    return cb(isInList);
}
const list = ["cat", "dog", "cat-dog", "yo-yo"];
contains("yo-yo", list, function (result) {
    console.log(result);
});

/* STRETCH PROBLEM */
const doops = ["cat", "cat", "cat", "dog", "dog"]
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
    const newArray = [...new Set(array)];
    return cb(newArray);
}
removeDuplicates(doops, function (results) {
    console.log(results);
});
