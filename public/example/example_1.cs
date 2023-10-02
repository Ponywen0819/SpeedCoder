using System;

class SimpleCSharpExample
{
    static int Multiply(int x, int y)
    {
        return x * y;
    }

    static void Main()
    {
        int num1 = 5;
        int num2 = 10;
        int product = Multiply(num1, num2);
        Console.WriteLine($"The product is: {product}");
    }
}
