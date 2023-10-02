#include <iostream>

int multiply(int x, int y) {
    return x * y;
}

int main() {
    int num1 = 5;
    int num2 = 10;
    int product = multiply(num1, num2);
    std::cout << "The product is: " << product << std::endl;

    return 0;
}
