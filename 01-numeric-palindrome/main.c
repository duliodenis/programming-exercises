//
//  Programming Challenge 1: Find whether a number is a numeric palindrome
//  main.c
//
//  Created by Dulio Denis on 9/1/15.
//  Copyright (c) 2015 Dulio Denis. All rights reserved.
//

#include <stdio.h>

// This function checks to see if a number is a palindrome
// by reversing the number and comparing it to the original

void palindromicNumber() {
    // User Input and Output
    printf("--------------------------------\n");
    printf("PALINDROME OF A NUMBER\n");
    int number, reverse = 0, temp;

    printf("Enter the number to check: ");
    scanf("%d", &number);

    printf ("You entered: %d\n", number);

    // The numeric reversal algorithm
    temp = number;
    while (temp != 0) {
        reverse = reverse * 10;
        reverse = reverse + temp % 10;
        temp = temp / 10;
    }

    printf("The reverse of %d is %d", number, reverse);

    if (number == reverse) {
        printf(" and it is a palindrome.\n");
    } else {
        printf(" and it is NOT a palindrome.\n");
    }
}

int main() {
    palindromicNumber();

    return 0;
}