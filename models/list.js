const mongoose = require("mongoose");
const { v4: uuid4 } = require("uuid");

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
        default: 'Incomplete',
        required: true,
        enum: ['Incomplete', 'complete', 'deferred']
    }
});

//register model to collection
const list = mongoose.model("todo-list", listSchema);

//make out model accesible to files
module.exports = list;