package main

import "fmt"

func square(num int) int {
    return num * num
}

func checkEvenOdd(num int) bool {
    return num%2 == 0
}

func main() {
    num1 := 5
    result1 := square(num1)

    num2 := 10
    checkEvenOdd(num2)

    fmt.Println(result1)
}
