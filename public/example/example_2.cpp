#include <iostream>

int square(int num) {
    return num * num;
}

bool checkEvenOdd(int num) {
    return num % 2 == 0;
}

int main() {
    int num1 = 5;
    int result1 = square(num1);

    int num2 = 10;
    checkEvenOdd(num2);

    return 0;
}
