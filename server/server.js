require("dotenv").config();

const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const fileupload = require("express-fileupload");

const app = express();

app.use(cors());

app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(require("./routes/ownerRoutes"));

app.use(require("./routes/teacherRountes"));
app.use(require("./routes/adminRoutes"));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.enable("trust proxy");

app.use(morgan("method :url :response-time ms"));

app.listen(8000,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is running on port 8000");
    require("./db/ConnectionPool");
});