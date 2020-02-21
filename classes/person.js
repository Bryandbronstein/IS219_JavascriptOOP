class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
        this.info = function () {
            return "My first name is " + this._firstName +
                " and my last name is " + this._lastName;
        }
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
}
module.exports = Person;