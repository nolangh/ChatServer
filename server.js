/* ----------------------- ANCHOR Port and file paths ----------------------- */
const port = process.env.PORT || 8080;
const dataFile = "chatLog.txt";

/* ---------------------------- ANCHOR Libraries ---------------------------- */
const app = require("express")();
const fs = require("fs");
const io = require("socket.io")(`${port}`);

io.on("connection", (socket) => {
	socket.emit("chat-message", "Hellow world"); //change this to emit the users name
});
