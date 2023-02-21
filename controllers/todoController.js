const list = require('../models/list');

// get all todo's
async function getAll(req, res, next){
    try{
        const allTodo = await list.find({});
        res.json({
            success: true,
            list: allTodo
        })
    }catch(e){
        console.log(e);
        res.json({
            succes: false,
            message: String(e)
        })
    }
}

// get one todo by id
async function getById(req, res, next){
    try {
        const foundTodo = await list.findById(req.params.id).exec();
        res.json({
            success: true,
            todo: foundTodo
        })
    } catch (e){
        console.log(e);
        res.json({
            succes: false,
            message: String(e)
        })
    }
}

// create one new todo
async function createOne(req, res, next){
    try{
        const savedData = await list.create(req.body);
        res.json({
            success: true,
            todo: savedData
        })
    }catch(e){  
        console.log(e);
        res.json({
          error: String(e)
        });
    }
}

// update one todo in the db
// can update any property
async function updateOne(req, res, next){
    const entryId = req.params.id;
    try {
        await list.findByIdAndUpdate(entryId, req.body);
        res.json({
            success: true,
            message: `todo entry id ${entryId} updated`
        })
    } catch (e){
        console.log(e);
        res.json({
          error: String(e)
        });
    }
}

// delete one todo in the db by id
async function deleteOne(req, res, next){
    const entryId = req.params.id;
    try {
        await list.findByIdAndDelete(entryId);
        res.json({
            success: true,
            message: `todo entry id ${entryId} has been deleted`
        })
    } catch (e){
        console.log(e);
        res.json({
          error: String(e)
        });
    }
}

// create multi new todo's in the db
async function createMulti(req, res, next){
    try{
        const savedDataArr = [];
        for(let i = 0; i < req.body.length; i++){
            const savedData = await list.create(req.body[i]);
            savedDataArr.push(savedData);
        }
        res.json({
            success: true,
            todosAdded: savedDataArr
        })
    }catch(e){  
        console.log(e);
        res.json({
          error: String(e)
        });
    }
}

// delete many todo's in the db
// deletes many by condition passed in
// can delete all completed tasks 
// can delete all incomplete tasks
// can delete all deferred tasks
async function deleteMulti(req, res, next){
    const entryCondition = req.params.condition;
    try{
        await list.deleteMany({status: entryCondition})
        res.json({
            success: true,
            message: `All todo with completed set to ${entryCondition} have been deleted`
        })
    }catch(e){
        console.log(e);
        res.json({
          error: String(e)
        });
    }
}

module.exports = {
    getAll,
    getById,
    createOne,
    updateOne,
    deleteOne,
    createMulti,
    deleteMulti
}