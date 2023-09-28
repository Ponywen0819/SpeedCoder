class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def display_info(self):
        print(f"Animal: {self.name}, Species: {self.species}")

def calculate_average(numbers):
    return sum(numbers) / len(numbers)

def filter_odd_numbers(numbers):
    return [num for num in numbers if num % 2 != 0]

def main():
    fruits = ['apple', 'orange', 'banana']
    capitalized_fruits = [fruit.capitalize() for fruit in fruits]

    print("Capitalized Fruits:")
    for fruit in capitalized_fruits:
        print(fruit)

    numbers = [1, 2, 3, 4, 5]
    average = calculate_average(numbers)
    print(f"Average of numbers: {average}")

    odd_numbers = filter_odd_numbers(numbers)
    print(f"Odd Numbers: {odd_numbers}")

    cat = Animal("Whiskers", "Cat")
    dog = Animal("Buddy", "Dog")

    cat.display_info()
    dog.display_info()

if __name__ == "__main__":
    main()
