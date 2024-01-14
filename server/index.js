const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());

server.get("/", (request, response) => {
    response.send("Hello World")
});

server.get('/test', (req, res) => {
    res.send("Test Successful");
});

server.get('/login', (req, res) => {
    res.send({
        name: "Aatika",
        password: "123456"
    });
});


server.listen(5000, () => {
    console.log('Server is running on PORT 5000');
});
