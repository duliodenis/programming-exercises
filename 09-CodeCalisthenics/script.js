//
//  http://www.vikingcodeschool.com/web-markup-and-coding/level-up-your-ruby-judo
//  Web Markup and Coding (Level Up Judo)
//
//  Created by Dulio Denis on 9/26/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Six Challenges: Turning logical problems into a code solutions.


//  Power: Write a method power which takes two integers (base and exponent) and 
//         returns the base raised to the power of exponent.
function power(base, exponent) {
    var answer = 1;
    
    if (exponent == 0) return base; // base case
    for (var i=0; i < exponent; i++) {
        answer = answer * base; 
    }
    return answer;
}

// Test Cases
console.log("2^5 = 32 = " + power(2, 5));
console.log("3^0 = 3 = " + power(3, 0));


// Factorial: Write a method factorial which takes a number and 
//            returns the product of every number up to the current number multiplied together.
function factorial(number) {
    var answer = 1;
    
    if (number == 1) return 1; // base case
    for (var multiplier = 1; multiplier <= number; multiplier++) {
        answer = answer * multiplier;
    }
    return answer;
}

// Test Cases
console.log("2! = 2 * 1 = 2 = " + factorial(2));
console.log("5! = 5 * 4 * 3* 2 * 1 = 120 = " + factorial(5));


// Uniques: Write a method which takes an array of items and returns the array without any duplicates. 

var uniques = function(array) {
    var returnedArray = [];
    for (var i = 0; i < array.length; i++) {
        if (returnedArray.indexOf(array[i]) == -1) 
            returnedArray.push(array[i]);   
    }
    return returnedArray;
}

// Test Case
var array = [5, 2, 3, 4, 3, 2, 5];
console.log("[5, 2, 3, 4] = " + uniques(array));


// Combinations: Write a method which takes two arrays of strings and returns an array with all
//               of the combinations of the items in them, listing the first items first.

var combinations = function(array1, array2) {
    var returnArray = [];
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            returnArray.push(array1[i] + array2[j]);   
        }
    }
    return returnArray;
}

// Test Case
var array1 = ["1", "2", "3"];
var array2 = ["4", "5"];
console.log("[14, 15, 24, 25, 34, 35] = " + combinations(array1, array2));

var array3 = ["1", "2"];
var array4 = ["3", "4", "5"];
console.log("[13, 14, 15, 23, 24, 25] = " + combinations(array3, array4));


// Primes: Write a method which takes in a number and returns true if it is a prime number.

var isPrime = function(n) {
    // check if n is divisible by 2 or 3
    if (n % 2 == 0 || n % 3 == 0) return false;
    
    // check only the odd divisors that are not multiples of 3 under sqrt(n)
    var m = Math.sqrt(n);
    for (var i = 5; i <= m; i+=6) {
        if (n % i     == 0) return false;
        if (n % (i+2) == 0) return false;
    }
    
    return true;
}

// Test Cases
console.log("7 is prime = true = " + isPrime(7));
console.log("9 is not prime = false = " + isPrime(9));
console.log("98764321261 is a prime = true = " + isPrime(98764321261));
console.log("2047 is not prime = false = " + isPrime(2047));