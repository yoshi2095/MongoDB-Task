let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let personSchema = new Schema({
    name : {
        type: String,
        unique: true
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    date_of_birth: Date,
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Person'
        }
    ]
});

let Person = mongoose.model('Person', personSchema);

module.exports = Person;
