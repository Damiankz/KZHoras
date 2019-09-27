const ExceptionType = require("../models/exceptionType.model");

exports.exceptionType_create = function(req, res, next) {
	let exceptionType = new ExceptionType({
		exceptionName: req.body.exceptionName,
		color: req.body.color,
		description: req.body.description
	});
	exceptionType.save(function(err) {
		if (err) {
			return next(err);
		}
		res.send("exceptionType Created successfully");
	});
};
