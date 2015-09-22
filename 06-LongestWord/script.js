//
//  http://CoderByte.com
//  Coding Area (Easy Challenge)
//
//  Created by Dulio Denis on 9/22/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Longest Word: For this challenge you will be determining the largest word in a string.
//  Parameter: A sentence.
//  Ignore: Punctuation marks in words. Use space to separate words.

function longestWord(sentence) {
    var v = sentence.split(" ");
    var longest = "";
    
    for (var i = 0; i < v.length; i ++) {
        if (v[i].replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/gi, '').length > longest.length) longest = v[i];   
    }

    return longest;
}


// Test Cases

// last in the array
var longestTest = longestWord("Argument goes here");
console.log("Argument = " + longestTest);

// first in the array with punctuations
var longestTest2 = longestWord("ab b&& c{}.");
console.log("ab = " + longestTest2);
