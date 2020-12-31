const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema(
	{
		title: {
			type: String,
			require: true,
		},
		body: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const TodoList = mongoose.model("todo_list", TodoSchema);

module.exports = TodoList;
