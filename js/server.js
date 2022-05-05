/* ----------------------- ANCHOR Port and file paths ----------------------- */
//const express = require("express");
// const dataFile = "chatLog.txt";
/* ---------------------------- ANCHOR Libraries ---------------------------- */
//const port = process.env.PORT || 8080;
//const app = express();
//const fs = require("fs");
const io = require("socket.io")(3000);

// app.get("/", (req, res) => {
// 	res.send(`Server active on: ${port}`);
// 	console.log(`Server active on: ${port}`);
// });

io.on("connection", (socket) => {
	socket.emit("chat-message", "Hello world"); //change this to emit the users name
});

// app.listen(port, () => {
// 	console.log(`Server is active on: ${port}`);
// });
