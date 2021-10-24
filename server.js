const express = require("express");
const app = express();
var mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use(express.static("public"));
const path = require("path");
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false
    })
  );
  app.options("*", cors());

// mongodb connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we are connected");
});

//schema
var UserSchema = new mongoose.Schema({
    name: String,
    pnumber: String,
    email: String,
    state: String,
    age: String,
    gender: String,
    qualification: String,
    occupation:String,
    goals: String,
    motivation: String,
    date: { type: Date, default: Date.now },
});
var User = mongoose.model("User", UserSchema);

// app.get("/", (req, res) => {
//   express.static(path.join(__dirname, "public"));
// });

app.use(express.static(path.join(__dirname, "./D-app/dist/D-app")));
app.use("/",  express.static(path.join(__dirname, "./D-app/dist/D-app")));






//routes
app.post("/api", (req, res) => {
  console.log("req.body", req.body);
  var myData = new User(req.body);
  myData.save((err, data)=>{
        if(err){
            console.log("err", err)
            res.status(500).json({
                'msg': 'Database Error Occured!'
            })
        }else{
            res.status(200).json({ 
                'status': true,
                'msg': 'Profile is created',
                data: data
            });
        }
    })
  
});

app.get("/api", (req, res) => {
  var myData = new User();
  User.find().then((data) => {
    console.log("Data", data);
    res.send(data);
  });
});

app.listen(PORT, () => {
 // console.log(`server is running at ${PORT}`);
  console.log("BackEnd Server Is On=", process.env.PORT || PORT)
});