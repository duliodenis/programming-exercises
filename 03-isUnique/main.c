//
//  Programming Challenge 3: Determine whether a string has all unique characters.
//  main.c
//
//  Created by Dulio Denis on 9/5/15.
//  Copyright (c) 2015 Dulio Denis. All rights reserved.
//
//  Compile: gcc main.c

#include <stdio.h>
#include <string.h>
#include <stdbool.h>


// This function determines whether a string has all unique characters.
// Assumes ASCII character set and not Unicode.

bool isUnique(char* str) {
	// immediate fail based on number of unique characters in alphabet
	if (strlen(str) > 128) return false; 
 
 	// declare a boolean array and initialize it to false
	bool characters[128];
	for (int i=0; i < 128; i++) characters[i] = false;

	// iterate through the string and mark each time we see a character
	for (int i =0; i < strlen(str); i++) {
 		int value = str[i];
 		if (characters[value]) { // if the character already in the string
 			return false;		 // return immediately
		}

 		characters[value] = true;	// set the character as having been seen
	}

	return true; // we haven't seen any duplicates so return true
}


// This function acquires user input in order to call isUnique with it

void testUnique() {
	bool unique;
	char string[100];

    printf("--------------------------------\n");
    printf("DOES STRING HAVE ALL UNIQUE CHARACTERS\n");
    
    // User Input
    printf("Enter the string to check: ");
    scanf("%s", string);

    // call our function with the user string
    unique = isUnique(string);
    
    if (unique) printf("%s has all unique characters\n", string);
    else 		printf("%s does NOT have all unique characters\n", string);
}


int main() {
    testUnique();

    return 0;
}