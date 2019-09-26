const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	userName: {
		type: String,
		required: true
	},
	projects: {
		type: Array
	},
	isAdmin: {
		type: Boolean,
		required: true,
		default: false
	},
	vacationDays: {
		type: Number,
		required: true
	}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
