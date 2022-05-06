const socket = io("http://localhost:3000");

const messageForm = document.getElementById("message-container");

socket.on("chat-message", (data) => {
	console.log(data);
});
