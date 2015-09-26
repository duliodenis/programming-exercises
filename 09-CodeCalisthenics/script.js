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