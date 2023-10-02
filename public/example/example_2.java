using System;

public class SimpleCSharpExample
{
    static int Square(int num)
    {
        return num * num;
    }

    static bool CheckEvenOdd(int num)
    {
        return num % 2 == 0;
    }

    public static void Main()
    {
        int num1 = 5;
        int result1 = Square(num1);

        int num2 = 10;
        CheckEvenOdd(num2);
    }
}
