const express = require("express");
const app = express();

const HOSTNAME = "192.168.1.11";
const PORT = "8080";

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.openFile("./index.html");
    res.end();
});

app.use(function (req, res) {
	res.status(404).send("Sorry, that route doesn't exist. Have a nice day. :)");
});

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server listening on port: http://${HOSTNAME}:${PORT}`);
});
