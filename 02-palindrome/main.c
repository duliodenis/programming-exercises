//
//  Programming Challenge 2: Find whether a string is a palindrome
//  main.c
//
//  Created by Dulio Denis on 9/4/15.
//  Copyright (c) 2015 Dulio Denis. All rights reserved.
//
//  Compile: gcc main.c

#include <stdio.h>
#include <string.h>

// This function checks to see if a string is a palindrome

void palindromicString() {
    printf("--------------------------------\n");
    printf("PALINDROME WITH STRING\n");
    char string[100], original[100], temp;
    int begin, end;

    // input
    printf("Enter the string to check: ");
    scanf("%s", string);

    printf ("You entered: %s\n", string);

    // copy the original string to compare to at the end
    strcpy(original,string);

    // reverse string
    begin = 0;
    end = strlen(string) - 1; // accounting for NULL terminated string

    while (begin < end) {
        temp = string[begin];
        string[begin] = string[end];
        string[end] = temp;
        begin++;
        end--;
    }

    printf ("The reversed string is %s\n", string);
    printf ("Since the original is %s", original);

    // compare the reversed string to the original
    if (!strcmp(string, original)) {
        printf(" it is a palindrome.\n");
    } else {
        printf(" it is NOT a palindrome.\n");
    }
}

int main() {
    palindromicString();

    return 0;
}