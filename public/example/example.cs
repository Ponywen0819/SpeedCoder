using System;

public interface IShape {
    double CalculateArea();
    void DisplayInfo();
}

public abstract class Shape : IShape {
    public abstract double CalculateArea();
    public abstract void DisplayInfo();
}

public class Circle : Shape {
    public double Radius { get; set; }

    public Circle(double radius) {
        Radius = radius;
    }

    public override double CalculateArea() {
        return Math.PI * Math.Pow(Radius, 2);
    }

    public override void DisplayInfo() {
        Console.WriteLine($"Circle - Radius: {Radius}, Area: {CalculateArea()}");
    }
}

public class Rectangle : Shape {
    public double Length { get; set; }
    public double Width { get; set; }

    public Rectangle(double length, double width) {
        Length = length;
        Width = width;
    }

    public override double CalculateArea() {
        return Length * Width;
    }

    public override void DisplayInfo() {
        Console.WriteLine($"Rectangle - Length: {Length}, Width: {Width}, Area: {CalculateArea()}");
    }
}

class Program {
    static void Main() {
        Circle myCircle = new Circle(5);
        Rectangle myRectangle = new Rectangle(4, 6);

        myCircle.DisplayInfo();
        myRectangle.DisplayInfo();
    }
}
