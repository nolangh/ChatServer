// const socket = io("http://localhost:3000");
// const messageContainer = document.getElementById("message-container");
// const messageForm = document.getElementById("send-container");
// const messageInput = document.getElementById("message-input");

// const name = prompt("What is your name?");
// addMessage("Welcome to the party");
// socket.emit("new-user", name);

// socket.on("chat-message", (data) => {
// 	addMessage(`${data.name}: ${data.message}`);
// });

// socket.on("user-connected", (name) => {
// 	addMessage(`${name} is here to party`);
// });

// socket.on("user-disconnected", (name) => {
// 	addMessage(`${name} left the party`);
// });

// messageForm.addEventListener("submit", (e) => {
// 	// try setting this to .on isntead of eventListner
// 	e.preventDefault();
// 	const message = messageInput.value;
// 	addMessage(`You: ${message}`);
// 	socket.emit("send-chat-message", message);
// 	messageInput.value = "";
// });

// function addMessage(message) {
// 	const messageElement = document.createElement("div");
// 	messageElement.innerText = message;
// 	messageContainer.append(messageElement);
// }

const socket = io("http://localhost:3000");
const messageContainer = document.getElementById("message-container");
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");

const name = prompt("What is your name?");
appendMessage("You joined");
socket.emit("new-user", name);

socket.on("chat-message", (data) => {
	appendMessage(`${data.name}: ${data.message}`);
});

socket.on("user-connected", (name) => {
	appendMessage(`${name} connected`);
});

socket.on("user-disconnected", (name) => {
	appendMessage(`${name} disconnected`);
});

messageForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const message = messageInput.value;
	appendMessage(`You: ${message}`);
	socket.emit("send-chat-message", message);
	messageInput.value = "";
});

function appendMessage(message) {
	const messageElement = document.createElement("div");
	messageElement.innerText = message;
	messageContainer.append(messageElement);
}
