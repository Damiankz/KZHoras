const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const timeEntrySchema = new Schema({
	owner: {
		type: Object,
		required: true
	},
	project: {
		type: Object,
		required: true
	},
	exceptions: {
		type: Array
	},
	matchExpectations: {
		type: Boolean,
		required: true,
		default: true
	},
	dateRange: {
		type: Array,
		required: true
	}
});

const TimeEntry = mongoose.model("TimeEntry", timeEntrySchema);

module.exports = TimeEntry;
