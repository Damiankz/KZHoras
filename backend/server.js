const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

const exceptionType = require("./routes/exceptionType.route");
app.use("/exceptionType", exceptionType);

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
const dev_db_url = process.env.dev_db_url;

mongoose.connect(uri || dev_db_url, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});

const connection = mongoose.connection;
mongoose.Promise = global.Promise;
let db = mongoose.connection;

connection.once("open", () => {
	console.log("MongoDB database connection established successfully");
});
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
