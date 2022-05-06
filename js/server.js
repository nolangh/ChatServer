const io = require("socket.io")(3000);

io.on("connection", (socket) => {
	socket.emit("chat-message", "Hello world"); //change this to emit the users name

	socket.on("send-chat-message", (message) => {
		console.log(message);
	});
});

// app.listen(port, () => {
// 	console.log(`Server is active on: ${port}`);
// });
