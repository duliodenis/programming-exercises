//
//  talentbuddy.co
//  Tech Interview Track (Elementary data structures)
//
//  Created by Dulio Denis on 9/20/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  FizzBuzz: multiples of three print “Fizz”, multiples of five print “Buzz, multiples of both three and five print “FizzBuzz”
//  https://www.talentbuddy.co/challenge/52a9121cc8a6c2dc91481f8d51846c184af0110af3822c30
//

function fizzbuzz(n) {
    var limit = n;
    for (var n=1; n <= limit; n++) {
        if ( (n % 3 == 0) && (n % 5 == 0) ) console.log("FizzBuzz");       
        else if (n % 3 == 0) console.log("Fizz");
        else if (n % 5 == 0) console.log("Buzz");
        else console.log(n);
    }
}


// Test Cases

console.log("fizzBuzz of 15 is");
fizzbuzz(15);