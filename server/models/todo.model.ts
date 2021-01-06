import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface TodoI {
	title: string;
	body: string;
}

type TodoListI = Array<TodoI>[] | any;

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

export default TodoList;

export type { TodoI, TodoListI };
