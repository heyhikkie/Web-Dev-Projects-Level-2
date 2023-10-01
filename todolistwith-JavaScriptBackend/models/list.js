const mongoose = require("mongoose")

const listSchema = new mongoose.Schema({
	title : String ,
	status : Boolean ,
})

module.exports = mongoose.model("List" , listSchema)