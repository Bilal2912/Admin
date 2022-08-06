require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const Record = require('./src/models/board');
require("./src/db/conn");
// const cors = require("cors");
const Register = require('./src/models/reg');
// const { urlencoded } = require("express");
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const auth = require('./src/middleware/auth');

const staticPath = path.join(__dirname,"./public");
app.use(express.static(staticPath));
app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    // Need To fix if user hasen't logged out and comes back on home page
    // Learn about authentication and cookies
    res.sendFile(path.join(__dirname,"./public/login.html"));
})
app.get("/welcome",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/welcome.html"));
})
app.get("/inventory",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/inventory.html"));
})
app.get("/requests",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/requests.html"));
})
app.get("/problems",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/problems.html"));
})
app.get("/students",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/students.html"));
})
app.get("/click",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/click.html"));
})
app.get("/working",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/working.html"));
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/login.html"));
})
app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/register.html"));
})
app.get("/logout", auth, async (req,res)=>{
    try {
        console.log(req.user);
        req.user.tokens = req.user.tokens.filter((current)=>{
            return current.token!==req.token;
        })

        res.clearCookie("jwt");
        await req.user.save();
        res.redirect('http://localhost:8000/login');
    } catch (error) {
        res.status(500).send(error);
    }
    // console.log('Logged Out');
})

app.post("/board", async(req,res)=>{
    try {
        const addnewRecord = new Record(req.body);
        console.log(req.body);
        const insertRecord = await addnewRecord.save();
        res.status(201).send(insertRecord);
    } catch (error) {
        res.status(400).send(error);
    }
})
app.get("/board", async(req,res)=>{
    try {
        const getrecords = await Record.find({}).sort({boardno:1});
        res.status(200).send(getrecords);
    } catch (error) {
        res.status(400).send(error);
    }
})
app.get("/board/:bn", async(req,res)=>{
    try {
        const boardno = req.params.bn;
        const getrecord = await Record.findOne({boardno:boardno});
        res.status(200).send(getrecord);
    } catch (error) {
        res.status(400).send(error);
    }
})

app.patch("/board/:bn", async(req,res)=>{
    try {
        const boardno = req.params.bn;
        const updaterecord = await Record.findOneAndUpdate({boardno:boardno},req.body,{
            new:true
        });
        res.status(200).send(updaterecord);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.delete("/board/:bn", async(req,res)=>{
    try {
        const boardno = req.params.bn;
        const deleterecord = await Record.deleteOne({boardno:boardno});
        res.status(200).send(deleterecord);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.post("/register", async (req,res)=>{
    try {
        const password = req.body.pass;
        const confirmpassword = req.body.confirmpass;
        if(password===confirmpassword){
            const student = new Register({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                emailid:req.body.emailid,
                phone:req.body.phone,
                pass:req.body.pass,
                confirmpass:req.body.confirmpass
            })

            const token = await student.generateToken();
            console.log(token);

            res.cookie("jwt",token,{
                expires:new Date(Date.now() + 600000),
                httpOnly:true
            })

            const studentEmail = await Register.findOne({emailid:student.emailid});
            if(studentEmail==null){
                const registered = await student.save();
                res.redirect('http://localhost:8000/welcome');
            }
            else{
                res.send('You are already a user. Please Sign In');
            }
        }
        else{
            res.send('Passwords Are Not Matching');
        }
    } catch (error) {
        res.status(400).send(error);
    }
})
app.post("/login", async (req,res)=>{
    try {  
        const emailid = req.body.emailid;
        const pass = req.body.pass;
        const studentEmail = await Register.findOne({emailid:emailid});
        const isMatch = await bcrypt.compare(pass,studentEmail.pass);

        const token = await studentEmail.generateToken();
        console.log(token);
        await studentEmail.save();

        res.cookie("jwt",token,{
            expires:new Date(Date.now() + 600000),
            httpOnly:true
        })

        if(isMatch){
            res.redirect('http://localhost:8000/welcome');
        }
        else{
            res.send("Invalid Credentials");
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

app.post("/faculty", async (req,res)=>{
    try {
        const addnewfaculty = new Register(req.body);
        console.log(req.body);
        const insertfaculty = await addnewfaculty.save();
        res.status(201).send(insertfaculty);
    } catch (error) {
        res.status(400).send(error);
    }
})
app.get("/faculty", async (req,res)=>{
    try {
        const getfaculty = await Register.find({}).sort({firstname:1});
        res.status(200).send(getfaculty);
    } catch (error) {
        res.status(400).send(error);
    }
})
app.get("/faculty/:pn", async(req,res)=>{
    try {
        const phone = req.params.pn;
        const getfaculty = await Register.findOne({phone:phone});
        res.status(200).send(getfaculty);
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
})