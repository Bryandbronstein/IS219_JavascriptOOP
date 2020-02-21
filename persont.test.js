const Person = require('person');

describe('Person class test: ', ()=> {
    test(
        'Constructor is functioning',
        () => {
            const jerry = new Person("Jerry", "Gergich");
            expect(jerry.fullName).toBe("Jerry Gergich");
            expect(jerry.info()).toBe("My first name is Jerry and my last name is Gergich");
        }
    )
});
