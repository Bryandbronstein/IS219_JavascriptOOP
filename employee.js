class Employee extends Person{
    constructor(company, position, salary, firstName, lastName) {
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
                + this._position + " and make $" + this._salary +
                " dollars a year."
        }
    }
}
module.exports = Employee;