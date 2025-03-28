const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors")
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

app.use(cors());



//login route
app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    users.find((u) => {
        if(u){
            if(u.username === username && u.password === password){
                res.json("Success")
            }
            else{
                res.status(400).json("Password or username invalid")
            }
        }
    })
});   

app.post("/api/logout", (req, res) =>{
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter((token)=> token !== refreshToken);
    res.status(200).json("Logged out successful")
});

app.listen(5000, () => console.log("Backend is working!"));