const connectToMongo = require('./db')
const express = require('express');

//Establish connection 
connectToMongo();

//Intializing Server on Port 5000  
const app = express();
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//Middleware function used to parse json data sent in request body -- without it we cant access data from request body
app.use(express.json())

//Import auth file and hit the api's through /api/auth -- for creating, login, and authenticaton of user
app.use("/api/auth",require("./routes/auth"));

//Import notes file and hit the api's through /api/note -- for crud of notes
app.use("/api/note",require("./routes/notes"));

