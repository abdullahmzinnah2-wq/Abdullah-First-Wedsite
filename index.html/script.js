const greeting = document.getElementById("greeting");
const button = document.getElementById("changeMessage");

const messages = [
  "Hello, Liberia!",
  "Welcome to my first website!",
  "Coding is fun!"
];

button.addEventListener("click", () => {
  const currentIndex = messages.indexOf(greeting.textContent);
  const nextIndex = (currentIndex + 1) % messages.length;
  greeting.textContent = messages[nextIndex];
});