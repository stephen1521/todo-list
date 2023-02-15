const list = require('../models/list');

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

module.exports = {
    getAll,
}