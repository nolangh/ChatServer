const app = require("express")();
const fs = require("fs");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;
const dataFile = "chatLog.txt";

let chatLogData = fs.readFileSync(dataFile, { encoding: "utf-8", flag: "r" });
let messageLog = {};

let count = 0;
let clients = [];

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
	console.log(`new user joined\n`);
	console.log(`${chatLogData}`);
	clients.push(socket);
	socket.userNumber = count++;
	socket.write(`user${count} Welcome to the chat room`);

	io.on("chat message", (msg) => {
		let clientMessage = msg.toString().trim();
		console.log(`recieving ${clientMessage} from client`);
		fs.appendFile(dataFile, `${clientMessage}\n`, (err) => {
			if (err) {
				throw err;
			}
		});
		//io.emit("chat message", msg);
	});
});

http.listen(port, () => {
	console.log(`Socket.IO server running at http://localhost:${port}/`);
});
