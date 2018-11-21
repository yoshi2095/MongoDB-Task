let mongoose = require('mongoose');
let Person = require('./Person');

let personOne = new Person({
    name: 'One',
    gender: 'male',
    date_of_birth: new Date(1986, 11, 1)
});

let personTwo = new Person({
    name: 'Two',
    gender: 'female',
    date_of_birth: new Date(1991, 6, 5)
});

let personThree = new Person({
    name: 'Three',
    gender: 'male',
    date_of_birth: new Date(1994, 10, 2)
});

let personFour = new Person({
    name: 'Four',
    gender: 'female',
    date_of_birth: new Date(1985, 5, 5)
});

let personFive = new Person({
    name: 'Five',
    gender: 'male',
    date_of_birth: new Date(1991, 12, 11)
});

module.exports = {
    personOne,
    personTwo,
    personThree,
    personFour,
    personFive
};