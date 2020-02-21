# IS219_JavascriptOOP

### Encapsulation

Encapsulation is achieved when each object keeps its state private, inside a class. 
Other objects don’t have direct access to this state. Instead, they can only call a list of public
 functions called methods.  In the example below, we can only access the Person ```firstname``` 
 and ```lastname``` properties of the ```Person``` class via the method ```get fullName``` and ```set fullName```
```javascript
class Person {
    constructor({firstName, lastName, job}) {
        this._firstName = firstName;
        this._lastName = lastName;
        Person._amount = Person._amount || 0;
        Person._amount++;
    }

    static get amount() {
        return Person._amount;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
```

### Abstraction
Abstraction can be thought of as a natural extension of encapsulation.
Applying abstraction means that each object should only expose a high-level mechanism for using it.
This mechanism should hide internal implementation details. 
It should only reveal operations relevant for the other objects.  In other words, classes 
should be kept as simple as possible from the outside.  Below, the method ```set fullName```
has a complicated regex expression to validate input as well as concatenate
```firstname``` and ```lastname``` together, but is kept simple on the outside 
```javascript
class Person {
    constructor({firstName, lastName}) {
        this._firstName = firstName;
        this._lastName = lastName;
        Person._amount = Person._amount || 0;
        Person._amount++;
    }

    static get amount() {
        return Person._amount;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    set fullName(fN) {
        if (/[A-Za-z]\s[A-Za-z]/.test(fN)) {
            [this._firstName, this._lastName] = fN.split(' ');
        } else {
            throw Error('Bad fullname');
        }
    }
}
```

### Inheritance
To reuse the common logic and extract the unique logic of one class into a new class, we utilize Inheritance.
It means that you create a (child) class by deriving from another (parent) class. This way, we form a hierarchy.
The child class reuses all fields and methods of the parent class (common part) and can implement its own at the same time.

Below, we create a new class named ```Employee``` which inherits all the properties and methods
from ```Person``` while adding new ones
```javascript
class Employee extends Person{
    constructor(company, position, salary, firstName, lastName) {
        super(firstName, lastName);
        this._company = company;
        this._position = position;
        this._salary = salary;
    }
}
```

### Polymorphism
Like how Encapsulation is related to Abstraction, Inheritance is linked to Polymorphism. 
Polymorphism is used to define a parent interface to be reused. 
It outlines a bunch of common methods. Then, each child class implements its own version of these 
methods.
Below, we have our standard ```Person``` class and our new ```Employee``` class, 
just rewritten a bit to show them using the same function to achieve different results
```javascript
class Person {
    constructor({firstName, lastName}) {
        this._firstName = firstName;
        this._lastName = lastName;
        Person._amount = Person._amount || 0;
        Person._amount++;
        this.info = function () {
            return "My first name is " + this._firstName +
                " and my last name is " + this._lastName;
        }
    }
}

class Employee extends Person{
    constructor({company, position, salary, firstName, lastName}){
        super(firstName, lastName);
        this._firstName = firstName;
        this._lastName = lastName;
        this._company = company;
        this._position = position;
        this._salary = salary;
        this.info = function () {
            return "My first name is " + this._firstName +
                " and my last name is " + this._lastName + 
                ".  I work at " + this._company + " as a "
                + this._position + " and make $" + + this._salary +
                " dollars a year."
        }
    }
}
const jerry = new Person("Jerry", "Gergich");
const tom = new Employee("Parks and Rec", "Office Manager", "20000", "Tom", "Haverford");


console.log(jerry.info());
console.log(tom.info());
```

