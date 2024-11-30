

interface PersonProperties {
    name: string;
    surname: string;
    email: string;
    password: string;  }


class Person implements PersonProperties {
    public name: string;
    public surname: string;
    public email: string;  //
    public password: string;  
  
    constructor(name: string, surname: string, email: string, password: string) {
        this.name = name;
        this.surname = surname;
        this.email = email; 
        this.password = password;
    }


    getInfo(): void {
        console.log({
            name: this.name,
            surname: this.surname,
            email: this.email
        });
    }

   
    changeEmail(newEmail: string): void {
        this.email = newEmail;
        console.log(`Email updated to: ${this.email}`);
    }
}





