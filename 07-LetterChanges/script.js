//
//  http://CoderByte.com
//  Coding Area (Easy Challenge)
//
//  Created by Dulio Denis on 9/23/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Letter Changes: For this challenge you will be manipulating characters in a string 
//                  based off their positions in the alphabet.
//
//  Spec: Using the JavaScript language, have the function LetterChanges(str) take the
//        str parameter being passed and modify it using the following algorithm. 
//        Replace every letter in the string with the letter following it in the alphabet
//        (ie. c becomes d, z becomes a). 
//        Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 


// function to upper case all vowels

function upperCaseVowels(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == "a") array[i]="A";
        if (array[i] == "e") array[i]="E";
        if (array[i] == "i") array[i]="I";
        if (array[i] == "o") array[i]="O";
        if (array[i] == "u") array[i]="U";
    }
    return array;
}


// function to implement the letter changes

function letterChanges(str) { 
    var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var newString = [];

    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        letterIndex = alphabet.indexOf(char);
        
        // if its a letter in the set increment to the next letter
        if (letterIndex != -1) {
            // check edge condition if Z -> a
            if (letterIndex == alphabet.length -1) letterIndex = -1; 
            newString[i] = alphabet[++letterIndex];
        } 
        // else its a punctuation so skip incrementing it and just use it
        else newString[i] = str[i];
    }
    
    // if there is a vowel in the string uppercase it and return a string   
    return (upperCaseVowels(newString)).join("");     
}


// Test Cases

// simple test case
var newString1 = letterChanges("hello");
console.log("Ifmmp = " +newString1);


// punctuation and edge condition
var newString2 = letterChanges("world! dZ");
console.log("xpsmE! EA = " +newString2);