const mongoose = require("mongoose");
const { v4: uuid4 } = require("uuid");

// schema for a todo, overwrites "_id" property that is 
// already there and makes it a random uuid
const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now,
        required: true
    },
    dateCompleted: {
        type: Date,
        required: false,
    },
    status: {
        type: String,
        default: 'incomplete',
        required: true,
        enum: ['incomplete', 'complete', 'deferred']
    },
    _id: {
        type: String,
        default: uuid4
    }
});

//register model to collection
const list = mongoose.model("todo-list_data", listSchema);

//make out model accesible to files
module.exports = list;