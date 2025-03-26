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
//refresh tokens
app.post("/api/refresh", (req, res) => {
    //take the refresh tokens from the user
    const refreshToken = req.body.token

    //check whether token is valid ot invalid
    if(!refreshToken) return res.status(401).json("You are not authenticated")
    if(!refreshTokens.includes(refreshToken)) return res.status(403).json("Refreshtoken is invalid!")

    //if everything is okay
})
const generateAccessToken = (user) => {
    return jwt.sign({id: user.id}, "mySecretKey",
    {expiresIn: "15m"}
)};
const generateRefreshToken = (user) => {
    return jwt.sign({id: user.id}, "myRefreshSecretKey",
)};

//login route
app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => {
      return u.username === username && u.password === password;
    });
    if (user) {
      //Generate an access token
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);
      refreshTokens.push(refreshToken);
      res.json({
        username: user.username,
        accessToken,
        refreshToken,
      });
    } else {
      res.status(400).json("Username or password incorrect!");
    }
  });
  

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(" ")[1];

        jwt.verify(token, "mySecretKey", (err, user) =>{
            if(err){
                return res.status(403).json("Token is not valid")
            }
            req.user = user;
            next();
        });
    }else{
        res.status(401).json("You are not authenticated")
    }
};

app.post("/api/logout", verify, (req, res) =>{
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter((token)=> token !== refreshToken);
    res.status(200).json("Logged out successful")
});

app.listen(5000, () => console.log("Backend is working!"));