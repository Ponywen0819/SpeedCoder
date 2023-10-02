#include <stdio.h>

void swap(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}

int main() {
    int num1 = 5, num2 = 10;
    
    printf("Before swap: num1 = %d, num2 = %d\n", num1, num2);
    
    swap(&num1, &num2);
    
    printf("After swap: num1 = %d, num2 = %d\n", num1, num2);

    return 0;
}
