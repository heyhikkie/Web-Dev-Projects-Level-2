const mongoose = require("mongoose")
const list = require("../models/list")

mongoose.connect(process.env.MONGO_URI)
 

const createOne = async function (req,res) {
    try {
        const { title } = req.body;
        const todo = new list({
          title,
          status : true,
        });
        await todo.save();
        res.json(todo);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }
}

const findAll = async function (req,res) {
    try {
        const todos = await list.find();
        res.json(todos);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }
}

const deleteOne = async function (req,res) {
    try {
        const { id } = req.params;
        await list.findByIdAndRemove(id);
        res.json({ message: 'Item deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }
}

const updateOne = async function (req,res) {
    try {
        const { id } = req.params;
        const todo = await list.findByIdAndUpdate(id, req.body.title , { new: true });
        res.json(todo);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }
}



module.exports = {
    createOne,
    deleteOne,
    updateOne,
    findAll,
};