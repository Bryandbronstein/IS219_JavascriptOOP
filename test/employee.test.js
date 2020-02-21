const Employee = require('../classes/employee');

describe('Employee class test: ', ()=> {
    test(
        'Constructor is functioning',
        () => {
            const jerry = new Employee("Parks&Rec","Consultant","60000","Jerry","Gergich");
            expect(jerry.info()).toBe("My first name is Jerry and my last name is Gergich.  " +
                "I work at Parks&Rec as a Consultant and make $60000 dollars a year.");
        }
    )
});