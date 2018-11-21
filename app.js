let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db');

let Person = require('./Person');

let persons = require('./persons');

let allPersons = [];

const savePersons = (person) => {
    return new Promise((resolve, reject) => {
        person.save(function (err) {
            if(err){
                throw err;
            }
            resolve(person);
        })
    });
};

savePersons(persons.personOne).then((res)=>{
    console.log("personOne saved !", res);
    savePersons(persons.personTwo).then((res)=>{
        console.log("personTwo saved !", res);
        savePersons(persons.personThree).then((res)=>{
            console.log("personThree saved !", res);
            savePersons(persons.personFour).then((res)=>{
                console.log("personFour saved !", res);
                savePersons(persons.personFive).then((res)=>{
                    console.log("personFive saved !", res);
                    console.log("All the users saved succesfully!!!");
                    Person.find({}, function(err, persons){
                        if(err){
                            throw err;
                        }
                        allPersons = persons;
                        console.log("List of all the persons is:", allPersons[0]._id, allPersons[1]._id, allPersons[2]._id, allPersons[3]._id, allPersons[4]._id);


                        Person.update({name: 'Four'}, {friends: [allPersons[0]._id, allPersons[2]._id]}, function (err, person) {
                            if(err){
                                throw err;
                            }
                            console.log("person four", person);
                        });

                        Person.update({name: 'Three'}, {friends: [allPersons[0]._id, allPersons[1]._id, allPersons[3]._id]}, function (err, person) {
                            if(err){
                                throw err;
                            }
                            console.log("person three",person);
                        });

                        Person.update({name: 'Two'}, {friends: [allPersons[2]._id, allPersons[4]._id]}, function (err, person) {
                            if(err){
                                throw err;
                            }
                            console.log("person two",person);
                        });

                        Person.update({name: 'Five'}, {friends: [allPersons[0]._id, allPersons[1]._id, allPersons[2]._id]}, function (err, person) {
                            if(err){
                                throw err;
                            }
                            console.log("person five",person);
                        });

                        Person.update({name: 'One'}, {friends: [allPersons[2]._id, allPersons[3]._id, allPersons[4]._id]}, function (err, person) {
                            if(err){
                                throw err;
                            }
                            console.log("person one",person);
                        });

                        Person.find({gender: 'male'}).populate("friends").exec(function(err, persons){
                            if(err){
                                throw err;
                            }
                            console.log("All the persons with male gender are: ",persons);
                        });


                    });
                })
            })
        })
    })
}).catch((err)=>{
    console.log(err);
});
































