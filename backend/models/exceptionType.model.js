const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exceptionTypeSchema = new Schema({
	exceptionName: {
		type: String,
		required: true
	},
	color: {
		type: String
	},
	Description: {
		type: String,
		required: true
	}
});

const ExceptionType = mongoose.model("ExceptionType", exceptionTypeSchema);

module.exports = ExceptionType;
