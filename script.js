const socket = io("http://localhost:3000");

const messageContainer = document.getElementById("message-constainer");
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");

const name = prompt("What is your name?");
appendMessage = "Welcome to the party";
socket.emit("new-user", name);

socket.on("chat-message", (data) => {
	console.log(data);
});

socket.on("user-message", (name) => {
	appendMessage(`${name} is here to party`);
});

messageForm.addEventListener("submit", (e) => {
	// try setting this to .on isntead of eventListner
	e.preventDefault();
	const message = messageInput.value;
	socket.emit("send-chat-message", message);
	messageInput.value = "";
});

function addMessage(message) {
	const messageElement = document.createElement("div");
	messageElement.innerText = message;
	messageContainer.append(messageElement);
}
