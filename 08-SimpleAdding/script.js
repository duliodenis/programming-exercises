//
//  http://CoderByte.com
//  Coding Area (Easy Challenge)
//
//  Created by Dulio Denis on 9/25/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Simple Adding: For this challenge you will be adding up all the numbers from 1 to a certain argument
//


function addItUp(n) {
    var sum = 0;
    for (var i=0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}


// Test Cases
var sum1 = addItUp(50);
console.log("1275 = " +sum1);

var sum2 = addItUp(78);
console.log("3081 = " +sum2);