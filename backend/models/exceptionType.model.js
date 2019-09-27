const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exceptionTypeSchema = new Schema({
	exceptionName: {
		type: String,
		required: true,
		unique: true
	},
	color: {
		type: String
	},
	description: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("ExceptionType", exceptionTypeSchema);
