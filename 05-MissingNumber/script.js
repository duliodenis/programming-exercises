//
//  talentbuddy.co
//  Tech Interview Track (Elementary data structures)
//
//  Created by Dulio Denis on 9/21/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Missing Numbers: Find the missing numbers in an array
//  

function find_missing_number(v) {
    var returnArray = [];
    v.sort(function(a, b){return a-b});
    
    for (var i = 1; i < v[v.length - 1]; i++ ) {
        if (v.indexOf(i) == -1) returnArray.push(i);   
    }
    return returnArray;
}


// Test Cases

// Missing 1 number in a sorted array (1)
v1 = [2,3];
var missing_v1 = find_missing_number(v1);
console.log("1 = " +missing_v1.join(" "));

// Missing numbers in an unsorted array (51 + 61)
v2 = [7, 14, 28, 22, 11, 50, 39, 26, 4, 55, 42, 49, 54, 13, 19, 30, 32, 69, 25, 35, 38, 48, 12, 56, 17, 36, 41, 47, 10, 45, 43, 5, 1, 44, 34, 40, 57, 31, 53, 68, 9, 52, 20, 67, 27, 46, 70, 29, 65, 3, 64, 63, 15, 2, 16, 33, 60, 23, 62, 8, 59, 21, 6, 24, 66, 37, 18, 58];
var missing_v2 = find_missing_number(v2);
console.log("51 61 = " + missing_v2.join(" "));