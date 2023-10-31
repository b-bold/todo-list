
const mongoose = require("mongoose") // requiring the mongoose package

const todoSchema = new mongoose.Schema({
    // creating a schema for todo
    id: {
        type: UUID,
        unique: true,
        required: true
    },
    value: {
        // field1: task
        type: String, // task is a string
        unique: true, // it has to be unique
        required: true, // it is required
    },
    inProgress: {
        // field2: completed
        type: Boolean, // it is a boolean
        default: false, // the default is false
    },
    // id: null,
    // value: '',
    // timeSensitive: false,
    // favorForSomeone: false,
    // onSomeoneElseTodoList: false,
    // hasMultipleSteps: false,
    // willTake3MinOrLess: true,
    // inProgress: false
    timeSensitive: {
    // field2: completed
    type: Boolean, // it is a boolean
    default: false, // the default is false
    },
    favorForSomeone: {
        // field2: completed
        type: Boolean, // it is a boolean
        default: false, // the default is false
    },
    onSomeoneElseTodoList: {
        // field2: completed
        type: Boolean, // it is a boolean
        default: false, // the default is false
    },
    hasMultipleSteps: {
        // field2: completed
        type: Boolean, // it is a boolean
        default: false, // the default is false
    },
    willTake30MinOrLess: {
        // field2: completed
        type: Boolean, // it is a boolean
        default: false, // the default is false
    },

})

const todoModel = mongoose.model("Todo", todoSchema) // creating the model from the schema

module.exports = todoModel // exporting the model
