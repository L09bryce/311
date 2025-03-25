const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json())

const users = [
    {
        id: "1",
        username: "Emmanuel Bett",
        password: "qwer1245,",
    },
    {
        id: "2",
        username: "Felix Ateya",
        password: "asdf5643!",
    },
    {
        id: "3",
        username: "Joan Moraro",
        password: "zxcv6908@"
    },
    {
        id: "4",
        username: "Bryce Gichuhi",
        password: "qlkj4276#"
    }
]
//login route
app.post("/api/login", (req,res) => {
    const {username, password} =req.body;
    const user = users.find(u => {
        return u.username === username && u.password === password
    });
    if(user){
        res.json(user)
    }else{
        res.status(400).json("User or Password invalid!")
    }   
});

app.listen(5000, () => console.log("Backend is working!"));