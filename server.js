const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("."));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
    console.log("🌸 Sakhi AI running at http://localhost:3000");
});