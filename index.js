// Person class
var Person = /** @class */ (function () {
    // Constructor to initialize the properties
    function Person(name, surname, email, password) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }
    // Method to log name, surname, and email as an object
    Person.prototype.getInfo = function () {
        console.log({
            name: this.name,
            surname: this.surname,
            email: this.email
        });
    };
    // Method to change the email
    Person.prototype.changeEmail = function (newEmail) {
        this.email = newEmail;
        console.log("Email updated to: ".concat(this.email));
    };
    return Person;
}());
// Usage example
var person1 = new Person("John", "Doe", "john.doe@example.com", "password123");
// Get information about the person
person1.getInfo();
// Change the person's email
person1.changeEmail("john.newemail@example.com");
