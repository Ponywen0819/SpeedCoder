package main

import "fmt"

func multiply(x, y int) int {
    return x * y
}

func main() {
    num1 := 5
    num2 := 10
    product := multiply(num1, num2)
    fmt.Println("The product is:", product)
}
