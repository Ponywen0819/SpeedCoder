public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");

        int[] numbers = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        System.out.println("Sum of numbers: " + sum);

        class Person {
            String name;
            int age;

            Person(String name, int age) {
                this.name = name;
                this.age = age;
            }

            void displayInfo() {
                System.out.println("Name: " + name + ", Age: " + age);
            }
        }

        Person person1 = new Person("John", 30);
        Person person2 = new Person("Jane", 25);

        person1.displayInfo();
        person2.displayInfo();

        String greeting = "Welcome";
        String location = "Java World";
        String fullGreeting = greeting + " to " + location + "!";
        System.out.println(fullGreeting);
    }
}
