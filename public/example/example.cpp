#include <iostream>
#include <string>

class Animal {
public:
    Animal(const std::string& name) : name(name) {}

    virtual void makeSound() const {
        std::cout << "Some sound\n";
    }

    void eat() const {
        std::cout << name << " is eating\n";
    }

private:
    std::string name;
};

class Dog : public Animal {
public:
    Dog(const std::string& name, const std::string& breed)
        : Animal(name), breed(breed) {}

    void makeSound() const override {
        std::cout << "Woof woof\n";
    }

    void fetch() const {
        std::cout << "The dog is fetching a ball\n";
    }

private:
    std::string breed;
};

int main() {
    Animal genericAnimal("Unknown Animal");
    genericAnimal.makeSound();
    genericAnimal.eat();

    std::cout << "\n";

    Dog myDog("Buck", "Labrador");
    myDog.makeSound();
    myDog.eat();
    myDog.fetch();

    return 0;
}
