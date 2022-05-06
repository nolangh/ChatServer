const io = require("socket.io")(3000);

io.on("connection", (socket) => {
	console.log(test);
	socket.emit("chat-message", "Hello world"); //change this to emit the users name
});

// app.listen(port, () => {
// 	console.log(`Server is active on: ${port}`);
// });
